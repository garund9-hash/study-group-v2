import { db } from '../../lib/firebase';
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  limit
} from 'firebase/firestore';
import { STATUS_TYPES } from '../../constants/constants';

const COLLECTION_NAME = 'studyGroups';
const DEFAULT_PAGE_SIZE = 20;

export class StudyGroupRepository {
  /**
   * Get all study groups, ordered by creation date (newest first)
   */
  static async getAllStudyGroups(pageSize = DEFAULT_PAGE_SIZE) {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        orderBy('createdAt', 'desc'),
        limit(pageSize)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(docSnapshot => ({
        id: docSnapshot.id,
        ...docSnapshot.data()
      }));
    } catch (error) {
      if (import.meta.env.DEV) console.error('Error fetching all study groups:', error);
      throw error;
    }
  }

  /**
   * Subscribe to all study groups with real-time updates
   */
  static subscribeToAllStudyGroups(callback, pageSize = DEFAULT_PAGE_SIZE) {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy('createdAt', 'desc'),
      limit(pageSize)
    );

    return onSnapshot(q, (snapshot) => {
      const studies = snapshot.docs.map(docSnapshot => ({
        id: docSnapshot.id,
        ...docSnapshot.data()
      }));
      callback(studies);
    });
  }

  /**
   * Get a single study group by ID
   */
  static async getStudyGroupById(id) {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        throw new Error('NOT_FOUND');
      }

      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } catch (error) {
      if (import.meta.env.DEV) console.error('Error fetching study group:', error);
      throw error;
    }
  }

  /**
   * Get all study groups created by a specific organizer
   */
  static async getStudyGroupsByOrganizer(organizerId) {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('organizerId', '==', organizerId)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(docSnapshot => ({
        id: docSnapshot.id,
        ...docSnapshot.data()
      }));
    } catch (error) {
      if (import.meta.env.DEV) console.error('Error fetching organizer study groups:', error);
      throw error;
    }
  }

  /**
   * Subscribe to organizer's study groups with real-time updates
   */
  static subscribeToOrganizerStudyGroups(organizerId, callback) {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('organizerId', '==', organizerId)
    );

    return onSnapshot(q, (snapshot) => {
      const studies = snapshot.docs.map(docSnapshot => ({
        id: docSnapshot.id,
        ...docSnapshot.data()
      }));
      callback(studies);
    });
  }

  /**
   * Get count of study groups for an organizer
   */
  static async getOrganizerStudyCount(organizerId) {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('organizerId', '==', organizerId)
      );
      const snapshot = await getDocs(q);
      return snapshot.size;
    } catch (error) {
      if (import.meta.env.DEV) console.error('Error getting study count:', error);
      throw error;
    }
  }

  /**
   * Create a new study group
   */
  static async createStudyGroup(studyData) {
    try {
      const now = new Date().toISOString();
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...studyData,
        createdAt: now,
        status: STATUS_TYPES.OPEN
      });

      return {
        id: docRef.id,
        ...studyData,
        createdAt: now,
        status: STATUS_TYPES.OPEN
      };
    } catch (error) {
      if (import.meta.env.DEV) console.error('Error creating study group:', error);
      throw error;
    }
  }

  /**
   * Update a study group
   */
  static async updateStudyGroup(id, updates) {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(docRef, updates);

      return {
        id,
        ...updates
      };
    } catch (error) {
      if (import.meta.env.DEV) console.error('Error updating study group:', error);
      throw error;
    }
  }
}
