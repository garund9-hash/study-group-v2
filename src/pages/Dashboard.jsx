import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { db } from '../lib/firebase';
import { 
  collection, 
  query, 
  where, 
  onSnapshot, 
  updateDoc, 
  doc,
  getDocs 
} from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  CheckCircle, 
  XCircle, 
  Clock, 
  ChevronRight, 
  ChevronDown,
  UserCheck,
  Layout
} from 'lucide-react';

const Dashboard = () => {
  const { currentUser, userData } = useAuth();
  const navigate = useNavigate();
  
  const [myStudies, setMyStudies] = useState([]);
  const [myApplications, setMyApplications] = useState([]);
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    // 1. Fetch studies I manage (if organizer)
    const studiesQuery = query(
      collection(db, "studyGroups"), 
      where("organizerId", "==", currentUser.uid)
    );
    const unsubStudies = onSnapshot(studiesQuery, (snap) => {
      setMyStudies(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    // 2. Fetch my applications
    const appsQuery = query(
      collection(db, "applications"), 
      where("userId", "==", currentUser.uid)
    );
    const unsubApps = onSnapshot(appsQuery, (snap) => {
      setMyApplications(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    setLoading(false);
    return () => {
      unsubStudies();
      unsubApps();
    };
  }, [currentUser, navigate]);

  // Fetch applicants for a specific study
  useEffect(() => {
    if (!selectedStudy) {
      setApplicants([]);
      return;
    }

    const q = query(collection(db, "applications"), where("studyGroupId", "==", selectedStudy.id));
    const unsub = onSnapshot(q, (snap) => {
      setApplicants(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    return unsub;
  }, [selectedStudy]);

  const handleUpdateStatus = async (appId, newStatus) => {
    try {
      await updateDoc(doc(db, "applications", appId), { status: newStatus });
    } catch (err) {
      console.error(err);
      alert('상태 업데이트 실패');
    }
  };

  const downloadCSV = async (study) => {
    const q = query(
      collection(db, "applications"), 
      where("studyGroupId", "==", study.id),
      where("status", "==", "approved")
    );
    const snap = await getDocs(q);
    const participants = snap.docs.map(d => d.data());

    if (participants.length === 0) return alert('승인된 참가자가 없습니다.');

    const headers = ['Name', 'Email', 'Applied At'];
    const rows = participants.map(p => [
      p.userName,
      p.userEmail,
      new Date(p.appliedAt).toLocaleDateString()
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(r => r.join(','))
    ].join('\n');

    const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `witme_${study.title}_participants.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) return <div className="loading-state">로딩 중...</div>;

  return (
    <div className="container dashboard-page">
      <header className="dashboard-header">
        <h1>나의 대시보드</h1>
        <p>{userData?.displayName} 님, 환영합니다.</p>
      </header>

      <div className="dashboard-grid">
        {/* Left Column: Management */}
        <div className="dashboard-section">
          <div className="section-title">
            <Layout size={20} />
            <h2>내가 운영하는 스터디</h2>
          </div>
          
          {myStudies.length === 0 ? (
            <div className="empty-panel">운영 중인 스터디가 없습니다.</div>
          ) : (
            <div className="card-list">
              {myStudies.map(study => (
                <div 
                  key={study.id} 
                  className={`manage-card ${selectedStudy?.id === study.id ? 'active' : ''}`}
                  onClick={() => setSelectedStudy(selectedStudy?.id === study.id ? null : study)}
                >
                  <div className="card-header">
                    <h3>{study.title}</h3>
                    {selectedStudy?.id === study.id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                  
                  <AnimatePresence>
                    {selectedStudy?.id === study.id && (
                      <motion.div 
                        className="applicant-list"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="applicant-actions">
                          <button 
                            className="btn btn-outline btn-sm"
                            onClick={(e) => { e.stopPropagation(); downloadCSV(study); }}
                          >
                            <Download size={14} /> 명단 다운로드 (CSV)
                          </button>
                        </div>
                        
                        {applicants.length === 0 ? (
                          <div className="no-applicants">신청자가 아직 없습니다.</div>
                        ) : (
                          applicants.map(app => (
                            <div key={app.id} className="applicant-item">
                              <div className="app-user-info">
                                <span className="app-name">{app.userName}</span>
                                <span className="app-email">{app.userEmail}</span>
                              </div>
                              <div className="app-status-actions">
                                {app.status === 'pending' ? (
                                  <>
                                    <button 
                                      className="status-btn approve"
                                      onClick={(e) => { e.stopPropagation(); handleUpdateStatus(app.id, 'approved'); }}
                                    >
                                      <CheckCircle size={18} />
                                    </button>
                                    <button 
                                      className="status-btn reject"
                                      onClick={(e) => { e.stopPropagation(); handleUpdateStatus(app.id, 'rejected'); }}
                                    >
                                      <XCircle size={18} />
                                    </button>
                                  </>
                                ) : (
                                  <span className={`status-badge ${app.status}`}>
                                    {app.status === 'approved' ? '승인됨' : '거절됨'}
                                  </span>
                                )}
                              </div>
                            </div>
                          ))
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Applications */}
        <div className="dashboard-section">
          <div className="section-title">
            <UserCheck size={20} />
            <h2>나의 신청 현황</h2>
          </div>
          
          {myApplications.length === 0 ? (
            <div className="empty-panel">신청한 스터디가 없습니다.</div>
          ) : (
            <div className="card-list">
              {myApplications.map(app => (
                <div key={app.id} className="app-card">
                  <div className="app-card-content">
                    <h4>{app.studyTitle}</h4>
                    <span className="app-date">{new Date(app.appliedAt).toLocaleDateString()} 신청</span>
                  </div>
                  <div className={`status-tag ${app.status}`}>
                    {app.status === 'pending' && <><Clock size={14} /> 대기 중</>}
                    {app.status === 'approved' && <><CheckCircle size={14} /> 승인됨</>}
                    {app.status === 'rejected' && <><XCircle size={14} /> 거절됨</>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx="true">{`
        .dashboard-page { padding: 4rem 0; }
        .dashboard-header { margin-bottom: 4rem; text-align: center; }
        .dashboard-header h1 { font-size: 3rem; margin-bottom: 0.5rem; }
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 3rem;
          align-items: start;
        }
        .section-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--accent-primary);
        }
        .section-title h2 { font-size: 1.5rem; }
        .card-list { display: flex; flex-direction: column; gap: 1.5rem; }
        
        /* Manage Card Styles */
        .manage-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          overflow: hidden;
          transition: var(--transition-snappy);
          cursor: pointer;
        }
        .manage-card.active { border-color: var(--accent-primary); box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .card-header { padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; }
        .card-header h3 { font-size: 1.2rem; }
        
        .applicant-list { padding: 0 1.5rem 1.5rem; border-top: 1px solid #f0f0f0; }
        .applicant-actions { display: flex; justify-content: flex-end; padding: 1rem 0; }
        .btn-sm { padding: 0.4rem 0.8rem; font-size: 0.75rem; display: flex; align-items: center; gap: 0.4rem; }
        
        .applicant-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid #f9f9f9;
        }
        .app-user-info { display: flex; flex-direction: column; }
        .app-name { font-weight: 600; font-size: 0.95rem; }
        .app-email { font-size: 0.8rem; color: var(--text-secondary); }
        
        .status-btn { padding: 0.4rem; border-radius: 4px; border: 1px solid #eee; }
        .status-btn.approve:hover { background-color: #ecfdf5; color: #10b981; border-color: #10b981; }
        .status-btn.reject:hover { background-color: #fef2f2; color: #ef4444; border-color: #ef4444; }
        
        /* Application Card Styles */
        .app-card {
          background-color: white;
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .app-card h4 { font-size: 1.1rem; margin-bottom: 0.25rem; }
        .app-date { font-size: 0.8rem; color: var(--text-secondary); }
        
        .status-tag, .status-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .status-tag.pending, .status-badge.pending { background-color: #fef3c7; color: #d97706; }
        .status-tag.approved, .status-badge.approved { background-color: #d1fae5; color: #059669; }
        .status-tag.rejected, .status-badge.rejected { background-color: #fee2e2; color: #dc2626; }
        
        .empty-panel, .no-applicants {
          padding: 3rem;
          text-align: center;
          background-color: var(--bg-secondary);
          border-radius: 8px;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .dashboard-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
