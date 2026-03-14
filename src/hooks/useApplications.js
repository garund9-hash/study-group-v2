import { useState, useEffect } from 'react';
import { ApplicationRepository } from '../services/repositories/ApplicationRepository';

/**
 * Hook to fetch user's applications with real-time updates
 */
export function useUserApplications(userId) {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) {
      setApplications([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const unsubscribe = ApplicationRepository.subscribeToUserApplications(
      userId,
      (data) => {
        setApplications(data);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [userId]);

  return { applications, loading, error };
}

/**
 * Hook to fetch applications for a study group with real-time updates
 */
export function useStudyGroupApplications(studyGroupId) {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!studyGroupId) {
      setApplications([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const unsubscribe = ApplicationRepository.subscribeToStudyGroupApplications(
      studyGroupId,
      (data) => {
        setApplications(data);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [studyGroupId]);

  return { applications, loading, error };
}
