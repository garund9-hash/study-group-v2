import React, { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Calendar, ArrowRight } from 'lucide-react';

const Home = () => {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "studyGroups"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const studyData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setStudies(studyData);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) return <div className="loading-state">스터디를 불러오는 중...</div>;

  return (
    <div className="home-page">
      <header className="hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            함께 배우고, 함께 성장하는 <br />
            <span>Wit.me</span> 스터디 플랫폼
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            관심 있는 분야의 스터디를 찾거나 직접 만들어보세요.
          </motion.p>
        </div>
      </header>

      <section className="study-list container">
        <div className="section-header">
          <h2>최근 등록된 스터디</h2>
          <div className="filter-hint">총 {studies.length}개의 스터디</div>
        </div>

        {studies.length === 0 ? (
          <div className="empty-state">
            아직 등록된 스터디가 없습니다. 첫 스터디의 주인공이 되어보세요!
          </div>
        ) : (
          <div className="study-grid">
            {studies.map((study, index) => (
              <motion.div 
                key={study.id}
                className="study-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="study-tag">{study.category}</div>
                <h3 className="study-title">{study.title}</h3>
                <p className="study-desc">{study.description.substring(0, 100)}...</p>
                
                <div className="study-info">
                  <div className="info-item">
                    <Users size={16} />
                    <span>정원 {study.maxParticipants}명</span>
                  </div>
                  <div className="info-item">
                    <Calendar size={16} />
                    <span>{new Date(study.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                <Link to={`/study/${study.id}`} className="study-link">
                  상세보기 <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <style jsx="true">{`
        .home-page {
          padding-bottom: 5rem;
        }
        .hero {
          background-color: var(--bg-secondary);
          padding: 6rem 0;
          text-align: center;
          margin-bottom: 4rem;
        }
        .hero h1 {
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        .hero h1 span {
          color: var(--accent-primary);
          border-bottom: 3px solid var(--accent-primary);
        }
        .hero p {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }
        .section-header h2 {
          font-size: 2rem;
        }
        .filter-hint {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .study-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
        .study-card {
          background-color: var(--bg-primary);
          padding: 2rem;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          transition: var(--transition-standard);
        }
        .study-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          border-color: var(--accent-primary);
        }
        .study-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--accent-primary);
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }
        .study-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .study-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        .study-info {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #f0f0f0;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .study-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: var(--accent-primary);
          align-self: flex-start;
        }
        .loading-state, .empty-state {
          text-align: center;
          padding: 5rem;
          color: var(--text-secondary);
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
};

export default Home;
