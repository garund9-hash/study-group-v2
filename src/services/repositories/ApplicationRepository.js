import { db } from '../../lib/firebase';
import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
  addDoc,
  updateDoc,
  doc
} from 'firebase/firestore';
import { STATUS_TYPES } from '../../constants/constants';

const COLLECTION_NAME = 'applications';

export class ApplicationRepository {
  /**
   * Get all applications for a study group
   */
  static async getApplicationsByStudyGroup(studyGroupId) {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('studyGroupId', '==', studyGroupId)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(docSnapshot => ({
        id: docSnapshot.id,
        ...docSnapshot.data()
      }));
    } catch (error) {
      console.error('Error fetching study group applications:', error);
      throw error;
    }
  }

  /**
   * Subscribe to applications for a study group with real-time updates
   */
  static subscribeToStudyGroupApplications(studyGroupId, callback) {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('studyGroupId', '==', studyGroupId)
    );

    return onSnapshot(q, (snapshot) => {
      const applications = snapshot.docs.map(docSnapshot => ({
        id: docSnapshot.id,
        ...docSnapshot.data()
      }));
      callback(applications);
    });
  }

  /**
   * Get all applications for a specific user
   */
  static async getApplicationsByUser(userId) {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('userId', '==', userId)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(docSnapshot => ({
        id: docSnapshot.id,
        ...docSnapshot.data()
      }));
    } catch (error) {
      console.error('Error fetching user applications:', error);
      throw error;
    }
  }

  /**
   * Subscribe to user's applications with real-time updates
   */
  static subscribeToUserApplications(userId, callback) {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('userId', '==', userId)
    );

    return onSnapshot(q, (snapshot) => {
      const applications = snapshot.docs.map(docSnapshot => ({
        id: docSnapshot.id,
        ...docSnapshot.data()
      }));
      callback(applications);
    });
  }

  /**
   * Check if user has already applied to a study group
   */
  static async hasUserApplied(userId, studyGroupId) {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('userId', '==', userId),
        where('studyGroupId', '==', studyGroupId)
      );
      const snapshot = await getDocs(q);
      return !snapshot.empty;
    } catch (error) {
      console.error('Error checking application status:', error);
      throw error;
    }
  }

  /**
   * Create a new application
   */
  static async createApplication(applicationData) {
    try {
      const now = new Date().toISOString();
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...applicationData,
        status: STATUS_TYPES.PENDING,
        appliedAt: now
      });

      return {
        id: docRef.id,
        ...applicationData,
        status: STATUS_TYPES.PENDING,
        appliedAt: now
      };
    } catch (error) {
      console.error('Error creating application:', error);
      throw error;
    }
  }

  /**
   * Update application status
   */
  static async updateApplicationStatus(applicationId, status) {
    try {
      const docRef = doc(db, COLLECTION_NAME, applicationId);
      await updateDoc(docRef, { status });

      return { id: applicationId, status };
    } catch (error) {
      console.error('Error updating application status:', error);
      throw error;
    }
  }

  /**
   * Get approved participants for a study group
   */
  static async getApprovedParticipants(studyGroupId) {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('studyGroupId', '==', studyGroupId),
        where('status', '==', STATUS_TYPES.APPROVED)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(docSnapshot => ({
        id: docSnapshot.id,
        ...docSnapshot.data()
      }));
    } catch (error) {
      console.error('Error fetching approved participants:', error);
      throw error;
    }
  }
}
