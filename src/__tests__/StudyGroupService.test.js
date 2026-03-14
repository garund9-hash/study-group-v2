import { vi, describe, it, expect, beforeEach } from 'vitest';
import { StudyGroupService } from '../services/StudyGroupService';
import { StudyGroupRepository } from '../services/repositories/StudyGroupRepository';
import { ApplicationRepository } from '../services/repositories/ApplicationRepository';
import { ERROR_CODES, MAX_STUDIES_PER_ORGANIZER } from '../constants/constants';

vi.mock('../services/repositories/StudyGroupRepository');
vi.mock('../services/repositories/ApplicationRepository');

const FORM_DATA = {
  title: '리액트 스터디',
  category: '프로그래밍',
  description: '원본 설명',
  maxParticipants: 10
};

beforeEach(() => vi.clearAllMocks());

describe('StudyGroupService.createStudyGroup', () => {
  it('creates a study group when organizer is below the limit', async () => {
    StudyGroupRepository.getOrganizerStudyCount.mockResolvedValue(4);
    StudyGroupRepository.createStudyGroup.mockResolvedValue({ id: 'study1', ...FORM_DATA });

    const result = await StudyGroupService.createStudyGroup(FORM_DATA, 'org1', '모임장');

    expect(StudyGroupRepository.createStudyGroup).toHaveBeenCalledOnce();
    expect(result.id).toBe('study1');
  });

  it('creates a study group when organizer has zero studies', async () => {
    StudyGroupRepository.getOrganizerStudyCount.mockResolvedValue(0);
    StudyGroupRepository.createStudyGroup.mockResolvedValue({ id: 'study1' });

    await StudyGroupService.createStudyGroup(FORM_DATA, 'org1', '모임장');

    expect(StudyGroupRepository.createStudyGroup).toHaveBeenCalledOnce();
  });

  it('throws STUDY_LIMIT_EXCEEDED when organizer already has MAX studies', async () => {
    StudyGroupRepository.getOrganizerStudyCount.mockResolvedValue(MAX_STUDIES_PER_ORGANIZER);

    await expect(
      StudyGroupService.createStudyGroup(FORM_DATA, 'org1', '모임장')
    ).rejects.toMatchObject({ code: ERROR_CODES.STUDY_LIMIT_EXCEEDED });

    expect(StudyGroupRepository.createStudyGroup).not.toHaveBeenCalled();
  });

  it('uses enhancedDescription when provided', async () => {
    StudyGroupRepository.getOrganizerStudyCount.mockResolvedValue(0);
    StudyGroupRepository.createStudyGroup.mockResolvedValue({ id: 'study1' });

    await StudyGroupService.createStudyGroup(FORM_DATA, 'org1', '모임장', 'AI가 개선한 설명');

    const callArg = StudyGroupRepository.createStudyGroup.mock.calls[0][0];
    expect(callArg.description).toBe('AI가 개선한 설명');
  });

  it('uses original description when enhancedDescription is null', async () => {
    StudyGroupRepository.getOrganizerStudyCount.mockResolvedValue(0);
    StudyGroupRepository.createStudyGroup.mockResolvedValue({ id: 'study1' });

    await StudyGroupService.createStudyGroup(FORM_DATA, 'org1', '모임장', null);

    const callArg = StudyGroupRepository.createStudyGroup.mock.calls[0][0];
    expect(callArg.description).toBe('원본 설명');
  });

  it('passes organizerId and organizerName to the repository', async () => {
    StudyGroupRepository.getOrganizerStudyCount.mockResolvedValue(0);
    StudyGroupRepository.createStudyGroup.mockResolvedValue({ id: 'study1' });

    await StudyGroupService.createStudyGroup(FORM_DATA, 'org1', '홍길동 모임장');

    expect(StudyGroupRepository.createStudyGroup).toHaveBeenCalledWith(
      expect.objectContaining({ organizerId: 'org1', organizerName: '홍길동 모임장' })
    );
  });

  it('wraps unexpected repository errors in AppError(UNKNOWN_ERROR)', async () => {
    StudyGroupRepository.getOrganizerStudyCount.mockRejectedValue(new Error('db error'));

    await expect(
      StudyGroupService.createStudyGroup(FORM_DATA, 'org1', '모임장')
    ).rejects.toMatchObject({ code: ERROR_CODES.UNKNOWN_ERROR });
  });
});

describe('StudyGroupService.getOrganizerStudiesWithCount', () => {
  it('returns correct metadata when organizer has 3 studies (below limit)', async () => {
    const studies = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
    StudyGroupRepository.getStudyGroupsByOrganizer.mockResolvedValue(studies);

    const result = await StudyGroupService.getOrganizerStudiesWithCount('org1');

    expect(result.studies).toEqual(studies);
    expect(result.count).toBe(3);
    expect(result.canCreateMore).toBe(true);
    expect(result.remainingSlots).toBe(MAX_STUDIES_PER_ORGANIZER - 3);
  });

  it('returns canCreateMore=false and remainingSlots=0 when at the limit', async () => {
    const studies = Array.from({ length: MAX_STUDIES_PER_ORGANIZER }, (_, i) => ({ id: `s${i}` }));
    StudyGroupRepository.getStudyGroupsByOrganizer.mockResolvedValue(studies);

    const result = await StudyGroupService.getOrganizerStudiesWithCount('org1');

    expect(result.canCreateMore).toBe(false);
    expect(result.remainingSlots).toBe(0);
  });

  it('returns count=0 and canCreateMore=true for a new organizer with no studies', async () => {
    StudyGroupRepository.getStudyGroupsByOrganizer.mockResolvedValue([]);

    const result = await StudyGroupService.getOrganizerStudiesWithCount('org1');

    expect(result.count).toBe(0);
    expect(result.canCreateMore).toBe(true);
    expect(result.remainingSlots).toBe(MAX_STUDIES_PER_ORGANIZER);
  });
});
