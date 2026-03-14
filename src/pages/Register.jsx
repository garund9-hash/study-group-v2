import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MIN_PASSWORD_LENGTH } from '../constants/constants';
import { motion } from 'framer-motion';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < MIN_PASSWORD_LENGTH) {
      return setError(`비밀번호는 최소 ${MIN_PASSWORD_LENGTH}자 이상이어야 합니다.`);
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password, displayName);
      navigate('/');
    } catch (err) {
      setError('회원가입에 실패했습니다. 이미 사용 중인 이메일일 수 있습니다.');
      if (import.meta.env.DEV) console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <motion.div 
        className="auth-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="auth-title">Join Wit.me</h1>
        <p className="auth-subtitle">함께 성장하는 즐거움, 당신의 성장을 응원합니다.</p>
        
        {error && <div className="auth-error">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label">이름</label>
            <input 
              type="text" 
              className="input-field" 
              value={displayName} 
              onChange={(e) => setDisplayName(e.target.value)} 
              required 
              placeholder="홍길동"
            />
          </div>
          <div className="input-group">
            <label className="input-label">이메일</label>
            <input 
              type="email" 
              className="input-field" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="example@wit.me"
            />
          </div>
          <div className="input-group">
            <label className="input-label">{`비밀번호 (${MIN_PASSWORD_LENGTH}자 이상)`}</label>
            <input 
              type="password" 
              className="input-field" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="••••••••"
            />
          </div>
          
          <button
            type="submit" 
            className="btn btn-primary btn-block" 
            disabled={loading}
          >
            {loading ? '처리 중...' : '회원가입'}
          </button>
        </form>
        
        <p className="auth-footer">
          이미 계정이 있으신가요? <Link to="/login">로그인</Link>
        </p>
      </motion.div>

      <style jsx="true">{`
        .auth-page {
          min-height: calc(100vh - 84px);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-secondary);
          padding: 2rem;
        }
        .auth-card {
          background-color: var(--bg-primary);
          padding: 3rem;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          width: 100%;
          max-width: 450px;
        }
        .auth-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 0.5rem;
        }
        .auth-subtitle {
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          font-size: 0.95rem;
        }
        .input-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }
        .btn-block {
          width: 100%;
          padding: 1rem;
          margin-top: 1rem;
          font-size: 1rem;
        }
        .auth-error {
          background-color: #fee2e2;
          color: #dc2626;
          padding: 0.75rem;
          border-radius: 4px;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .auth-footer {
          text-align: center;
          margin-top: 2rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .auth-footer a {
          color: var(--accent-primary);
          font-weight: 600;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Register;
