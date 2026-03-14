import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useStudyGroup } from '../hooks/useStudyGroups';
import { ApplicationService } from '../services/ApplicationService';
import { handleServiceError } from '../utils/errorHandler';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Users, Calendar, ArrowLeft, CheckCircle2, User } from 'lucide-react';

const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay: 0.2 }
};

const StudyDetail = () => {
  const { id } = useParams();
  const { currentUser, userData } = useAuth();
  const navigate = useNavigate();

  const { study, loading } = useStudyGroup(id);
  const [applying, setApplying] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);
  const [error, setError] = useState('');

  const handleApply = async () => {
    if (!currentUser) return navigate('/login');

    setApplying(true);
    setError('');

    try {
      await ApplicationService.applyToStudyGroup(
        study,
        currentUser.uid,
        userData.displayName,
        currentUser.email
      );
      setHasApplied(true);
    } catch (err) {
      const { message } = handleServiceError(err);
      setError(message);
    } finally {
      setApplying(false);
    }
  };

  if (loading) return <div className="loading-state">로딩 중...</div>;
  if (!study) return null;

  const isOrganizer = currentUser?.uid === study.organizerId;

  const renderApplicationButton = () => {
    if (!currentUser) {
      return (
        <Button
          variant="primary"
          fullWidth
          size="lg"
          onClick={() => navigate('/login')}
        >
          로그인하고 신청하기
        </Button>
      );
    }
    if (isOrganizer) {
      return (
        <Button
          variant="outline"
          fullWidth
          onClick={() => navigate('/dashboard')}
        >
          참가자 관리하기
        </Button>
      );
    }
    if (hasApplied) {
      return (
        <div className="applied-status">
          <CheckCircle2 size={24} />
          <span>신청 완료되었습니다.</span>
          <p>모임장의 승인을 기다리고 있습니다.</p>
        </div>
      );
    }
    return (
      <Button
        variant="primary"
        fullWidth
        size="lg"
        onClick={handleApply}
        disabled={applying}
      >
        {applying ? '신청 처리 중...' : '스터디 참여 신청'}
      </Button>
    );
  };

  return (
    <div className="container study-detail-page">
      <button onClick={() => navigate(-1)} className="back-btn">
        <ArrowLeft size={18} /> 목록으로 돌아가기
      </button>

      <div className="detail-layout">
        <motion.div
          className="detail-content"
          {...slideInLeft}
        >
          <div className="study-header">
            <span className="category-tag">{study.category}</span>
            <h1>{study.title}</h1>
            <div className="meta-info">
              <span className="organizer-name"><User size={16} /> {study.organizerName}</span>
              <span className="created-date"><Calendar size={16} /> {new Date(study.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="description-section">
            <h3>스터디 상세 소개</h3>
            <div className="description-text">
              {study.description.split('\n').map((line, lineIndex) => (
                <p key={lineIndex}>{line}</p>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="detail-sidebar"
          {...scaleIn}
        >
          <div className="sidebar-card">
            <div className="sidebar-info-group">
              <label>모집 인원</label>
              <div className="sidebar-val"><Users size={18} /> {study.maxParticipants}명</div>
            </div>

            <div className="sidebar-divider"></div>

            {error && <div style={{ marginBottom: '1rem' }} className="error-message">{error}</div>}

            {renderApplicationButton()}

            <p className="sidebar-hint">
              * 승인 후에는 대시보드에서 상태를 확인하실 수 있습니다.
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx="true">{`
        .study-detail-page {
          padding: 3rem 0;
        }
        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 3rem;
        }
        .detail-layout {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 4rem;
        }
        .study-header {
          margin-bottom: 3rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 2rem;
        }
        .category-tag {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--accent-secondary);
          margin-bottom: 1rem;
          display: block;
        }
        .study-header h1 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }
        .meta-info {
          display: flex;
          gap: 2rem;
          color: var(--text-secondary);
          font-size: 1rem;
        }
        .meta-info span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .description-section h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--accent-primary);
        }
        .description-text p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          color: var(--text-primary);
        }
        .sidebar-card {
          background-color: var(--bg-primary);
          padding: 2.5rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          position: sticky;
          top: 150px;
        }
        .sidebar-info-group {
          margin-bottom: 1.5rem;
        }
        .sidebar-info-group label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }
        .sidebar-val {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.25rem;
          font-weight: 600;
        }
        .sidebar-divider {
          height: 1px;
          background-color: var(--border-color);
          margin: 2rem 0;
        }
        .btn-full {
          width: 100%;
        }
        .btn-large {
          padding: 1rem;
          font-size: 1.1rem;
        }
        .applied-status {
          text-align: center;
          color: #10b981;
        }
        .applied-status span {
          display: block;
          font-weight: 700;
          margin: 1rem 0 0.5rem;
        }
        .applied-status p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .sidebar-hint {
          margin-top: 1.5rem;
          font-size: 0.75rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .loading-state {
          text-align: center;
          padding: 10rem;
          font-size: 1.5rem;
          color: var(--text-secondary);
        }
        @media (max-width: 900px) {
          .detail-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .sidebar-card {
            position: static;
          }
        }
      `}</style>
    </div>
  );
};

export default StudyDetail;
