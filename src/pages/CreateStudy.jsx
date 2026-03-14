import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCanCreateStudy } from '../hooks/useStudyGroups';
import { StudyGroupService } from '../services/StudyGroupService';
import { TextEnhancerService } from '../services/TextEnhancerService';
import { handleServiceError } from '../utils/errorHandler';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { Sparkles, AlertCircle } from 'lucide-react';
import { STUDY_CATEGORIES } from '../constants/errors';

const CreateStudy = () => {
  const { currentUser, userData } = useAuth();
  const navigate = useNavigate();
  const { canCreate, remainingSlots, loading: permissionLoading } = useCanCreateStudy(currentUser?.uid);

  const [formData, setFormData] = useState({
    title: '',
    category: STUDY_CATEGORIES[0],
    maxParticipants: 5,
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [error, setError] = useState('');

  // Check authorization
  if (!currentUser || userData?.role !== 'organizer') {
    navigate('/');
    return null;
  }

  if (permissionLoading) {
    return <div className="loading-state">권한 확인 중...</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const improveDescription = async () => {
    setError('');
    try {
      const enhanced = await TextEnhancerService.enhanceStudyDescription(
        formData.title,
        formData.description
      );
      setFormData(prev => ({ ...prev, description: enhanced }));
    } catch (err) {
      const { message } = handleServiceError(err);
      setError(message);
    } finally {
      setAiLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await StudyGroupService.createStudyGroup(
        formData,
        currentUser.uid,
        userData.displayName
      );
      navigate('/');
    } catch (err) {
      const { message } = handleServiceError(err);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (!canCreate) {
    return (
      <div className="container create-study-page">
        <div className="limit-reached">
          <AlertCircle size={48} color="#dc2626" />
          <h1>스터디 생성 한도 초과</h1>
          <p>모임장은 최대 5개의 스터디만 운영할 수 있습니다. 기존 스터디를 종료한 후 다시 시도해주세요.</p>
          <Button variant="outline" onClick={() => navigate('/')}>홈으로 돌아가기</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container create-study-page">
      <motion.div
        className="form-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="form-header">
          <h1>새로운 스터디 생성</h1>
          <p>당신의 지식을 나누고 함께 성장할 멤버를 모집하세요.</p>
          <div className="count-badge">{5 - remainingSlots} / 5 운영 중</div>
        </div>

        <ErrorMessage message={error} />

        <form onSubmit={handleSubmit} className="study-form">
          <div className="form-row">
            <div className="input-group flex-2">
              <label>스터디 제목</label>
              <input
                type="text"
                name="title"
                className="input-field"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="예: 리액트 마스터 클래스"
              />
            </div>
            <div className="input-group flex-1">
              <label>카테고리</label>
              <select name="category" className="input-field" value={formData.category} onChange={handleChange}>
                {STUDY_CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="input-group flex-1">
              <label>최대 인원</label>
              <input
                type="number"
                name="maxParticipants"
                className="input-field"
                value={formData.maxParticipants}
                onChange={handleChange}
                min="2"
                max="50"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <div className="label-row">
              <label>스터디 상세 설명</label>
              <button
                type="button"
                className="ai-btn"
                onClick={improveDescription}
                disabled={aiLoading}
              >
                {aiLoading ? 'AI 분석 중...' : <><Sparkles size={14} /> AI 설명 개선</>}
              </button>
            </div>
            <textarea
              name="description"
              className="input-field textarea-field"
              value={formData.description}
              onChange={handleChange}
              required
              rows="8"
              placeholder="스터디의 목적, 진행 방식, 시간, 장소 등을 자세히 적어주세요."
            />
          </div>

          <div className="form-actions">
            <Button variant="outline" onClick={() => navigate(-1)}>취소</Button>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? '생성 중...' : '스터디 생성하기'}
            </Button>
          </div>
        </form>
      </motion.div>

      <style jsx="true">{`
        .create-study-page {
          padding: 4rem 0;
          display: flex;
          justify-content: center;
        }
        .form-container {
          background-color: var(--bg-primary);
          padding: 3rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          width: 100%;
          max-width: 900px;
        }
        .form-header {
          margin-bottom: 3rem;
          position: relative;
        }
        .form-header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        .form-header p {
          color: var(--text-secondary);
        }
        .count-badge {
          position: absolute;
          top: 0;
          right: 0;
          background-color: var(--bg-secondary);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-primary);
        }
        .form-row {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .flex-1 { flex: 1; }
        .flex-2 { flex: 2; }
        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .ai-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: var(--accent-secondary);
          font-weight: 600;
          padding: 0.4rem 0.8rem;
          border: 1px solid var(--accent-secondary);
          border-radius: 4px;
        }
        .ai-btn:hover {
          background-color: rgba(230, 126, 34, 0.05);
        }
        .textarea-field {
          resize: vertical;
          min-height: 200px;
        }
        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }
        .error-message {
          background-color: #fee2e2;
          color: #dc2626;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }
        .limit-reached {
          text-align: center;
          padding: 5rem;
          max-width: 500px;
        }
        .limit-reached h1 {
          margin: 1.5rem 0 1rem;
        }
        .limit-reached p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }
        @media (max-width: 768px) {
          .form-row {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CreateStudy;
