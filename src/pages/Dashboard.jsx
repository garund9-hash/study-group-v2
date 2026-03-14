import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useOrganizerStudyGroups } from '../hooks/useStudyGroups';
import { useUserApplications, useStudyGroupApplications } from '../hooks/useApplications';
import { ApplicationService } from '../services/ApplicationService';
import { StudyGroupService } from '../services/StudyGroupService';
import { handleServiceError } from '../utils/errorHandler';
import { exportParticipantsToCSV } from '../utils/csvExporter';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { StatusBadge } from '../components/ui/StatusBadge';
import {
  Download,
  CheckCircle,
  XCircle,
  ChevronRight,
  ChevronDown,
  UserCheck,
  Layout
} from 'lucide-react';

const expandCollapse = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 }
};

const Dashboard = () => {
  const { currentUser, userData } = useAuth();

  // Hooks for data fetching
  const { studies: myStudies } = useOrganizerStudyGroups(currentUser?.uid);
  const { applications: myApplications } = useUserApplications(currentUser?.uid);

  const [selectedStudy, setSelectedStudy] = useState(null);
  const { applications: applicants } = useStudyGroupApplications(selectedStudy?.id);
  const [actionLoading, setActionLoading] = useState(false);
  const [actionError, setActionError] = useState('');

  const handleApproveApplication = async (appId) => {
    setActionError('');
    setActionLoading(true);
    try {
      await ApplicationService.approveApplication(appId, currentUser.uid);
    } catch (err) {
      const { message } = handleServiceError(err);
      setActionError(message);
    } finally {
      setActionLoading(false);
    }
  };

  const handleRejectApplication = async (appId) => {
    setActionError('');
    setActionLoading(true);
    try {
      await ApplicationService.rejectApplication(appId, currentUser.uid);
    } catch (err) {
      const { message } = handleServiceError(err);
      setActionError(message);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDownloadCSV = async (study) => {
    setActionError('');
    if (study.organizerId !== currentUser?.uid) {
      setActionError('권한이 없습니다.');
      return;
    }
    try {
      const participants = await StudyGroupService.getParticipantListForExport(study.id);
      if (participants.length === 0) {
        setActionError('내보낼 승인된 참가자가 없습니다.');
        return;
      }
      exportParticipantsToCSV(participants, study.title);
    } catch (err) {
      const { message } = handleServiceError(err);
      setActionError(message);
    }
  };

  return (
    <div className="container dashboard-page">
      <header className="dashboard-header">
        <h1>나의 대시보드</h1>
        <p>{userData?.displayName} 님, 환영합니다.</p>
      </header>

      <div style={{ marginBottom: '2rem' }}>
        <ErrorMessage message={actionError} />
      </div>

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
                        {...expandCollapse}
                      >
                        <div className="applicant-actions">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownloadCSV(study);
                            }}
                          >
                            <Download size={14} /> 명단 다운로드 (CSV)
                          </Button>
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
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleApproveApplication(app.id);
                                      }}
                                      disabled={actionLoading}
                                    >
                                      <CheckCircle size={18} />
                                    </button>
                                    <button
                                      className="status-btn reject"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleRejectApplication(app.id);
                                      }}
                                      disabled={actionLoading}
                                    >
                                      <XCircle size={18} />
                                    </button>
                                  </>
                                ) : (
                                  <StatusBadge status={app.status} />
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
                  <StatusBadge status={app.status} />
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
