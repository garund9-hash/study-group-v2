import { ApplicationRepository } from './repositories/ApplicationRepository';
import { AppError } from '../utils/errorHandler';
import { ERROR_CODES, STATUS_TYPES } from '../constants/constants';

export class ApplicationService {
  /**
   * Apply to a study group
   */
  static async applyToStudyGroup(studyData, userId, userName, userEmail) {
    try {
      // Check if already applied
      const hasApplied = await ApplicationRepository.hasUserApplied(userId, studyData.id);
      if (hasApplied) {
        throw new AppError(
          ERROR_CODES.ALREADY_APPLIED,
          '이미 신청한 스터디입니다.'
        );
      }

      // Prevent organizer from applying to own study
      if (studyData.organizerId === userId) {
        throw new AppError(
          ERROR_CODES.PERMISSION_DENIED,
          '자신이 운영하는 스터디에는 신청할 수 없습니다.'
        );
      }

      const applicationData = {
        studyGroupId: studyData.id,
        studyTitle: studyData.title,
        userId,
        userName,
        userEmail
      };

      return await ApplicationRepository.createApplication(applicationData);
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError(ERROR_CODES.UNKNOWN_ERROR, '신청에 실패했습니다.', error);
    }
  }

  /**
   * Get user's applications
   */
  static async getUserApplications(userId) {
    try {
      return await ApplicationRepository.getApplicationsByUser(userId);
    } catch (error) {
      throw new AppError(ERROR_CODES.UNKNOWN_ERROR, '신청 내역 조회에 실패했습니다.', error);
    }
  }

  /**
   * Get applications for a study group
   */
  static async getStudyGroupApplications(studyGroupId) {
    try {
      return await ApplicationRepository.getApplicationsByStudyGroup(studyGroupId);
    } catch (error) {
      throw new AppError(ERROR_CODES.UNKNOWN_ERROR, '신청자 목록 조회에 실패했습니다.', error);
    }
  }

  /**
   * Approve an application
   */
  static async approveApplication(applicationId) {
    try {
      return await ApplicationRepository.updateApplicationStatus(applicationId, STATUS_TYPES.APPROVED);
    } catch (error) {
      throw new AppError(ERROR_CODES.UNKNOWN_ERROR, '승인에 실패했습니다.', error);
    }
  }

  /**
   * Reject an application
   */
  static async rejectApplication(applicationId) {
    try {
      return await ApplicationRepository.updateApplicationStatus(applicationId, STATUS_TYPES.REJECTED);
    } catch (error) {
      throw new AppError(ERROR_CODES.UNKNOWN_ERROR, '거절에 실패했습니다.', error);
    }
  }

  /**
   * Check if user has applied to a study
   */
  static async hasApplied(userId, studyGroupId) {
    try {
      return await ApplicationRepository.hasUserApplied(userId, studyGroupId);
    } catch (error) {
      throw new AppError(ERROR_CODES.UNKNOWN_ERROR, '신청 상태 확인에 실패했습니다.', error);
    }
  }
}
