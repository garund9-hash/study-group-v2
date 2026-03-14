import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AppError, handleServiceError } from '../utils/errorHandler';
import { ERROR_CODES } from '../constants/constants';

// Suppress console.error output during tests (DEV guard prints to console)
beforeEach(() => vi.spyOn(console, 'error').mockImplementation(() => {}));

describe('AppError', () => {
  it('is an instance of Error', () => {
    const err = new AppError(ERROR_CODES.NOT_FOUND, '찾을 수 없습니다.');
    expect(err).toBeInstanceOf(Error);
  });

  it('stores code and message', () => {
    const err = new AppError(ERROR_CODES.FORBIDDEN, '권한이 없습니다.');
    expect(err.code).toBe(ERROR_CODES.FORBIDDEN);
    expect(err.message).toBe('권한이 없습니다.');
  });

  it('stores originalError when provided', () => {
    const original = new Error('original');
    const err = new AppError(ERROR_CODES.UNKNOWN_ERROR, '오류', original);
    expect(err.originalError).toBe(original);
  });

  it('sets originalError to null when not provided', () => {
    const err = new AppError(ERROR_CODES.NOT_FOUND, '없음');
    expect(err.originalError).toBeNull();
  });
});

describe('handleServiceError', () => {
  it('returns code and message from AppError unchanged', () => {
    const err = new AppError(ERROR_CODES.ALREADY_APPLIED, '이미 신청한 스터디입니다.');
    const result = handleServiceError(err);
    expect(result).toEqual({
      code: ERROR_CODES.ALREADY_APPLIED,
      message: '이미 신청한 스터디입니다.'
    });
  });

  it('maps auth/user-not-found to NOT_FOUND', () => {
    const result = handleServiceError({ code: 'auth/user-not-found' });
    expect(result.code).toBe(ERROR_CODES.NOT_FOUND);
  });

  it('maps auth/wrong-password to UNAUTHORIZED', () => {
    const result = handleServiceError({ code: 'auth/wrong-password' });
    expect(result.code).toBe(ERROR_CODES.UNAUTHORIZED);
  });

  it('maps auth/email-already-in-use to INVALID_INPUT', () => {
    const result = handleServiceError({ code: 'auth/email-already-in-use' });
    expect(result.code).toBe(ERROR_CODES.INVALID_INPUT);
  });

  it('maps Firestore permission-denied to PERMISSION_DENIED', () => {
    const result = handleServiceError({ code: 'permission-denied', message: '' });
    expect(result.code).toBe(ERROR_CODES.PERMISSION_DENIED);
  });

  it('maps NOT_FOUND string in message to NOT_FOUND code', () => {
    const result = handleServiceError({ message: 'NOT_FOUND', code: undefined });
    expect(result.code).toBe(ERROR_CODES.NOT_FOUND);
  });

  it('maps "network" in error message to NETWORK_ERROR', () => {
    const result = handleServiceError({ message: 'network timeout', code: 'CUSTOM_ERR' });
    expect(result.code).toBe(ERROR_CODES.NETWORK_ERROR);
  });

  it('returns UNKNOWN_ERROR with the original message for unrecognized errors', () => {
    const result = handleServiceError({ message: '완전히 예상치 못한 오류', code: 'WEIRD_CODE' });
    expect(result.code).toBe(ERROR_CODES.UNKNOWN_ERROR);
    expect(result.message).toBe('완전히 예상치 못한 오류');
  });

  it('returns UNKNOWN_ERROR fallback message when error message is empty', () => {
    const result = handleServiceError({ code: 'UNKNOWN_CODE', message: '' });
    expect(result.code).toBe(ERROR_CODES.UNKNOWN_ERROR);
    expect(result.message).toBe('알 수 없는 오류가 발생했습니다.');
  });
});
