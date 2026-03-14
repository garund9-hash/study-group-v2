import { ERROR_CODES } from '../constants/errors';

export class AppError extends Error {
  constructor(code, message, originalError = null) {
    super(message);
    this.code = code;
    this.originalError = originalError;
  }
}

export function handleServiceError(error) {
  console.error('Service Error:', error);

  // Handle AppError
  if (error instanceof AppError) {
    return {
      code: error.code,
      message: error.message
    };
  }

  // Handle Firebase auth errors
  if (error.code?.startsWith('auth/')) {
    const authErrors = {
      'auth/user-not-found': { code: ERROR_CODES.NOT_FOUND, message: '사용자를 찾을 수 없습니다.' },
      'auth/wrong-password': { code: ERROR_CODES.UNAUTHORIZED, message: '잘못된 비밀번호입니다.' },
      'auth/email-already-in-use': { code: ERROR_CODES.INVALID_INPUT, message: '이미 사용 중인 이메일입니다.' },
      'auth/permission-denied': { code: ERROR_CODES.PERMISSION_DENIED, message: '권한이 없습니다.' }
    };
    return authErrors[error.code] || { code: ERROR_CODES.UNKNOWN_ERROR, message: '인증 오류가 발생했습니다.' };
  }

  // Handle Firebase firestore errors
  if (error.code?.startsWith('permission-denied')) {
    return { code: ERROR_CODES.PERMISSION_DENIED, message: '접근 권한이 없습니다.' };
  }

  // Handle custom messages
  if (error.message.includes('STUDY_LIMIT_EXCEEDED')) {
    return { code: ERROR_CODES.STUDY_LIMIT_EXCEEDED, message: '최대 5개까지만 스터디를 생성할 수 있습니다.' };
  }

  if (error.message.includes('ALREADY_APPLIED')) {
    return { code: ERROR_CODES.ALREADY_APPLIED, message: '이미 신청한 스터디입니다.' };
  }

  if (error.message.includes('NOT_FOUND')) {
    return { code: ERROR_CODES.NOT_FOUND, message: '요청한 리소스를 찾을 수 없습니다.' };
  }

  // Network errors
  if (error.message?.includes('network') || error.code?.includes('NETWORK')) {
    return { code: ERROR_CODES.NETWORK_ERROR, message: '네트워크 오류가 발생했습니다.' };
  }

  // Default error
  return {
    code: ERROR_CODES.UNKNOWN_ERROR,
    message: error.message || '알 수 없는 오류가 발생했습니다.'
  };
}
