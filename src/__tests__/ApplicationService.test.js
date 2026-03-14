import { vi, describe, it, expect, beforeEach } from 'vitest';
import { ApplicationService } from '../services/ApplicationService';
import { ApplicationRepository } from '../services/repositories/ApplicationRepository';
import { StudyGroupRepository } from '../services/repositories/StudyGroupRepository';
import { ERROR_CODES, STATUS_TYPES } from '../constants/constants';

vi.mock('../services/repositories/ApplicationRepository');
vi.mock('../services/repositories/StudyGroupRepository');

const STUDY = { id: 'study1', organizerId: 'organizer1', title: '테스트 스터디' };
const APP   = { id: 'app1', studyGroupId: 'study1', userId: 'user1' };

beforeEach(() => vi.clearAllMocks());

describe('ApplicationService.applyToStudyGroup', () => {
  it('creates an application when user has not applied and is not the organizer', async () => {
    ApplicationRepository.hasUserApplied.mockResolvedValue(false);
    ApplicationRepository.createApplication.mockResolvedValue({ id: 'app1' });

    const result = await ApplicationService.applyToStudyGroup(STUDY, 'user1', '홍길동', 'user@test.com');

    expect(ApplicationRepository.createApplication).toHaveBeenCalledOnce();
    expect(result).toEqual({ id: 'app1' });
  });

  it('throws ALREADY_APPLIED when the user has already applied', async () => {
    ApplicationRepository.hasUserApplied.mockResolvedValue(true);

    await expect(
      ApplicationService.applyToStudyGroup(STUDY, 'user1', '홍길동', 'user@test.com')
    ).rejects.toMatchObject({ code: ERROR_CODES.ALREADY_APPLIED });

    expect(ApplicationRepository.createApplication).not.toHaveBeenCalled();
  });

  it('throws PERMISSION_DENIED when the organizer tries to apply to their own study', async () => {
    ApplicationRepository.hasUserApplied.mockResolvedValue(false);

    await expect(
      ApplicationService.applyToStudyGroup(STUDY, 'organizer1', '모임장', 'org@test.com')
    ).rejects.toMatchObject({ code: ERROR_CODES.PERMISSION_DENIED });

    expect(ApplicationRepository.createApplication).not.toHaveBeenCalled();
  });

  it('wraps unexpected repository errors in AppError(UNKNOWN_ERROR)', async () => {
    ApplicationRepository.hasUserApplied.mockRejectedValue(new Error('network fail'));

    await expect(
      ApplicationService.applyToStudyGroup(STUDY, 'user1', '홍길동', 'user@test.com')
    ).rejects.toMatchObject({ code: ERROR_CODES.UNKNOWN_ERROR });
  });

  it('passes correct applicationData to createApplication', async () => {
    ApplicationRepository.hasUserApplied.mockResolvedValue(false);
    ApplicationRepository.createApplication.mockResolvedValue({ id: 'app1' });

    await ApplicationService.applyToStudyGroup(STUDY, 'user2', '김철수', 'kim@test.com');

    expect(ApplicationRepository.createApplication).toHaveBeenCalledWith(
      expect.objectContaining({
        studyGroupId: 'study1',
        studyTitle: '테스트 스터디',
        userId: 'user2',
        userName: '김철수',
        userEmail: 'kim@test.com',
      })
    );
  });
});

describe('ApplicationService.approveApplication', () => {
  it('updates status to APPROVED when caller is the study organizer', async () => {
    ApplicationRepository.getApplicationById.mockResolvedValue(APP);
    StudyGroupRepository.getStudyGroupById.mockResolvedValue(STUDY);
    ApplicationRepository.updateApplicationStatus.mockResolvedValue({ id: 'app1', status: STATUS_TYPES.APPROVED });

    const result = await ApplicationService.approveApplication('app1', 'organizer1');

    expect(ApplicationRepository.updateApplicationStatus).toHaveBeenCalledWith('app1', STATUS_TYPES.APPROVED);
    expect(result.status).toBe(STATUS_TYPES.APPROVED);
  });

  it('throws FORBIDDEN when caller is not the study organizer', async () => {
    ApplicationRepository.getApplicationById.mockResolvedValue(APP);
    StudyGroupRepository.getStudyGroupById.mockResolvedValue(STUDY);

    await expect(
      ApplicationService.approveApplication('app1', 'other-user')
    ).rejects.toMatchObject({ code: ERROR_CODES.FORBIDDEN });

    expect(ApplicationRepository.updateApplicationStatus).not.toHaveBeenCalled();
  });

  it('throws NOT_FOUND when the application does not exist', async () => {
    ApplicationRepository.getApplicationById.mockResolvedValue(null);

    await expect(
      ApplicationService.approveApplication('nonexistent', 'organizer1')
    ).rejects.toMatchObject({ code: ERROR_CODES.NOT_FOUND });
  });

  it('wraps unexpected errors in AppError(UNKNOWN_ERROR)', async () => {
    ApplicationRepository.getApplicationById.mockRejectedValue(new Error('db error'));

    await expect(
      ApplicationService.approveApplication('app1', 'organizer1')
    ).rejects.toMatchObject({ code: ERROR_CODES.UNKNOWN_ERROR });
  });
});

describe('ApplicationService.rejectApplication', () => {
  it('updates status to REJECTED when caller is the study organizer', async () => {
    ApplicationRepository.getApplicationById.mockResolvedValue(APP);
    StudyGroupRepository.getStudyGroupById.mockResolvedValue(STUDY);
    ApplicationRepository.updateApplicationStatus.mockResolvedValue({ id: 'app1', status: STATUS_TYPES.REJECTED });

    const result = await ApplicationService.rejectApplication('app1', 'organizer1');

    expect(ApplicationRepository.updateApplicationStatus).toHaveBeenCalledWith('app1', STATUS_TYPES.REJECTED);
    expect(result.status).toBe(STATUS_TYPES.REJECTED);
  });

  it('throws FORBIDDEN when caller is not the study organizer', async () => {
    ApplicationRepository.getApplicationById.mockResolvedValue(APP);
    StudyGroupRepository.getStudyGroupById.mockResolvedValue(STUDY);

    await expect(
      ApplicationService.rejectApplication('app1', 'imposter')
    ).rejects.toMatchObject({ code: ERROR_CODES.FORBIDDEN });
  });

  it('throws NOT_FOUND when the application does not exist', async () => {
    ApplicationRepository.getApplicationById.mockResolvedValue(null);

    await expect(
      ApplicationService.rejectApplication('nonexistent', 'organizer1')
    ).rejects.toMatchObject({ code: ERROR_CODES.NOT_FOUND });
  });
});
