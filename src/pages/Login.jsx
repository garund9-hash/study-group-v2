import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const cardSlideIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
      if (import.meta.env.DEV) console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <motion.div
        className="auth-card"
        {...cardSlideIn}
      >
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Wit.me에서 당신의 스터디 여정을 계속하세요.</p>
        
        {error && <div className="auth-error">{error}</div>}
        
        <form onSubmit={handleSubmit}>
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
            <label className="input-label">비밀번호</label>
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
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </form>
        
        <p className="auth-footer">
          계정이 없으신가요? <Link to="/register">회원가입</Link>
        </p>
      </motion.div>

      <style jsx="true">{`
        .auth-page {
          min-height: calc(100vh - 84px);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-secondary);
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

export default Login;
