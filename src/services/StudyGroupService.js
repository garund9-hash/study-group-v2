import { StudyGroupRepository } from './repositories/StudyGroupRepository';
import { ApplicationRepository } from './repositories/ApplicationRepository';
import { AppError, handleServiceError } from '../utils/errorHandler';
import { MAX_STUDIES_PER_ORGANIZER, ERROR_CODES } from '../constants/errors';

export class StudyGroupService {
  /**
   * Create a new study group with business logic validation
   */
  static async createStudyGroup(formData, organizerId, organizerName, enhancedDescription = null) {
    try {
      // Validate organizer limit
      const studyCount = await StudyGroupRepository.getOrganizerStudyCount(organizerId);
      if (studyCount >= MAX_STUDIES_PER_ORGANIZER) {
        throw new AppError(
          ERROR_CODES.STUDY_LIMIT_EXCEEDED,
          'STUDY_LIMIT_EXCEEDED'
        );
      }

      // Use enhanced description if provided, otherwise use original
      const description = enhancedDescription || formData.description;

      // Create the study group
      const studyData = {
        title: formData.title,
        category: formData.category,
        description,
        maxParticipants: formData.maxParticipants,
        organizerId,
        organizerName
      };

      return await StudyGroupRepository.createStudyGroup(studyData);
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError(ERROR_CODES.UNKNOWN_ERROR, '스터디 생성에 실패했습니다.', error);
    }
  }

  /**
   * Get study group by ID
   */
  static async getStudyGroup(id) {
    try {
      return await StudyGroupRepository.getStudyGroupById(id);
    } catch (error) {
      if (error.message === 'NOT_FOUND') {
        throw new AppError(ERROR_CODES.NOT_FOUND, '스터디를 찾을 수 없습니다.');
      }
      throw new AppError(ERROR_CODES.UNKNOWN_ERROR, '스터디 조회에 실패했습니다.', error);
    }
  }

  /**
   * Get all study groups
   */
  static async getAllStudyGroups() {
    try {
      return await StudyGroupRepository.getAllStudyGroups();
    } catch (error) {
      throw new AppError(ERROR_CODES.UNKNOWN_ERROR, '스터디 목록 조회에 실패했습니다.', error);
    }
  }

  /**
   * Get organizer's study groups with count
   */
  static async getOrganizerStudiesWithCount(organizerId) {
    try {
      const studies = await StudyGroupRepository.getStudyGroupsByOrganizer(organizerId);
      const count = studies.length;

      return {
        studies,
        count,
        canCreateMore: count < MAX_STUDIES_PER_ORGANIZER,
        remainingSlots: MAX_STUDIES_PER_ORGANIZER - count
      };
    } catch (error) {
      throw new AppError(ERROR_CODES.UNKNOWN_ERROR, '스터디 조회에 실패했습니다.', error);
    }
  }

  /**
   * Check if organizer can create more studies
   */
  static async canOrganizerCreateStudy(organizerId) {
    try {
      const count = await StudyGroupRepository.getOrganizerStudyCount(organizerId);
      return count < MAX_STUDIES_PER_ORGANIZER;
    } catch (error) {
      throw new AppError(ERROR_CODES.UNKNOWN_ERROR, '권한 확인에 실패했습니다.', error);
    }
  }

  /**
   * Update study group
   */
  static async updateStudyGroup(id, updates) {
    try {
      return await StudyGroupRepository.updateStudyGroup(id, updates);
    } catch (error) {
      throw new AppError(ERROR_CODES.UNKNOWN_ERROR, '스터디 업데이트에 실패했습니다.', error);
    }
  }

  /**
   * Get participant list for CSV export
   */
  static async getParticipantListForExport(studyGroupId) {
    try {
      const participants = await ApplicationRepository.getApprovedParticipants(studyGroupId);

      return participants.map(p => ({
        name: p.userName,
        email: p.userEmail,
        appliedAt: p.appliedAt
      }));
    } catch (error) {
      throw new AppError(ERROR_CODES.UNKNOWN_ERROR, '참가자 목록 조회에 실패했습니다.', error);
    }
  }
}
