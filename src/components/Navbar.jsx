import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, PlusCircle, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const { currentUser, userData, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          Wit.me
        </Link>
        
        <div className="nav-links">
          {currentUser ? (
            <>
              {userData?.role === 'organizer' && (
                <Link to="/create" className="nav-link">
                  <PlusCircle size={18} />
                  <span>스터디 생성</span>
                </Link>
              )}
              <Link to="/dashboard" className="nav-link">
                <LayoutDashboard size={18} />
                <span>대시보드</span>
              </Link>
              <div className="nav-user">
                <User size={18} />
                <span>{userData?.displayName || currentUser.email}</span>
              </div>
              <button onClick={handleLogout} className="nav-link nav-btn-logout">
                <LogOut size={18} />
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">로그인</Link>
              <Link to="/register" className="btn btn-primary nav-btn-register">회원가입</Link>
            </>
          )}
        </div>
      </div>
      
      <style jsx="true">{`
        .navbar {
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border-color);
          background-color: var(--bg-primary);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-logo {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-primary);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .nav-link:hover {
          color: var(--accent-primary);
        }
        .nav-user {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--accent-primary);
          font-weight: 600;
        }
        .nav-btn-logout {
          color: #e74c3c;
        }
        .nav-btn-register {
          padding: 0.5rem 1.25rem;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
