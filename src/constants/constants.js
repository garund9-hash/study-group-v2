export const ERROR_CODES = {
  STUDY_LIMIT_EXCEEDED: 'STUDY_LIMIT_EXCEEDED',
  UNAUTHORIZED: 'UNAUTHORIZED',
  NOT_FOUND: 'NOT_FOUND',
  NETWORK_ERROR: 'NETWORK_ERROR',
  ALREADY_APPLIED: 'ALREADY_APPLIED',
  INVALID_INPUT: 'INVALID_INPUT',
  PERMISSION_DENIED: 'PERMISSION_DENIED',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'
};

export const STATUS_TYPES = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  OPEN: 'open',
  CLOSED: 'closed'
};

export const STUDY_CATEGORIES = [
  '프로그래밍',
  '어학',
  '디자인',
  '취업',
  '기타'
];

export const MAX_STUDIES_PER_ORGANIZER = 5;
export const MIN_PARTICIPANTS = 2;
export const MAX_PARTICIPANTS = 50;

export const ROLE_TYPES = {
  USER: 'user',
  ORGANIZER: 'organizer'
};

export const MIN_PASSWORD_LENGTH = 6;
export const DESCRIPTION_PREVIEW_LENGTH = 100;
