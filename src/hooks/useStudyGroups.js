import { useState, useEffect } from 'react';
import { StudyGroupRepository } from '../services/repositories/StudyGroupRepository';
import { StudyGroupService } from '../services/StudyGroupService';
import { MAX_STUDIES_PER_ORGANIZER } from '../constants/constants';

/**
 * Hook to fetch all study groups with real-time updates
 */
export function useAllStudyGroups() {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const unsubscribe = StudyGroupRepository.subscribeToAllStudyGroups((data) => {
      setStudies(data);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { studies, loading, error };
}

/**
 * Hook to fetch organizer's study groups with real-time updates
 */
export function useOrganizerStudyGroups(organizerId) {
  const [studies, setStudies] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!organizerId) {
      setStudies([]);
      setCount(0);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const unsubscribe = StudyGroupRepository.subscribeToOrganizerStudyGroups(
      organizerId,
      (data) => {
        setStudies(data);
        setCount(data.length);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [organizerId]);

  return { studies, count, loading, error };
}

/**
 * Hook to get a single study group by ID
 */
export function useStudyGroup(studyId) {
  const [study, setStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!studyId) {
      setLoading(false);
      return;
    }

    const fetchStudy = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await StudyGroupService.getStudyGroup(studyId);
        setStudy(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudy();
  }, [studyId]);

  return { study, loading, error };
}

/**
 * Hook to check if organizer can create more studies
 */
export function useCanCreateStudy(organizerId) {
  const [canCreate, setCanCreate] = useState(true);
  const [remainingSlots, setRemainingSlots] = useState(MAX_STUDIES_PER_ORGANIZER);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!organizerId) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    StudyGroupService.getOrganizerStudiesWithCount(organizerId)
      .then(result => {
        setCanCreate(result.canCreateMore);
        setRemainingSlots(result.remainingSlots);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [organizerId]);

  return { canCreate, remainingSlots, loading, error };
}
