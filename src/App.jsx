import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const StudyDetail = lazy(() => import('./pages/StudyDetail'));
const CreateStudy = lazy(() => import('./pages/CreateStudy'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Navbar />
          <main>
            <Suspense fallback={<div className="loading-state">로딩 중...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/study/:id" element={<StudyDetail />} />
                <Route
                  path="/create"
                  element={
                    <ProtectedRoute requiredRole="organizer">
                      <CreateStudy />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Suspense>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;

