import { getGeminiModel } from '../lib/gemini';
import { AppError } from '../utils/errorHandler';
import { ERROR_CODES } from '../constants/constants';

export class TextEnhancerService {
  /**
   * Strip characters that can be used for prompt injection and enforce max length.
   * NOTE: Gemini API key is currently exposed via VITE_ env var (bundled into client JS).
   * TODO: migrate AI calls to a Firebase Cloud Function so the key stays server-side.
   */
  static sanitizeForPrompt(input) {
    return input
      .replace(/[<>]/g, '')
      .replace(/\bignore\b.{0,50}\binstruction/gi, '[filtered]')
      .substring(0, 500);
  }

  /**
   * Enhance study description using AI
   */
  static async enhanceStudyDescription(title, currentDescription) {
    try {
      if (!currentDescription || currentDescription.trim().length === 0) {
        throw new AppError(
          ERROR_CODES.INVALID_INPUT,
          '설명을 먼저 입력해주세요.'
        );
      }

      const model = getGeminiModel();
      const prompt = this.buildEnhancementPrompt(title, currentDescription);

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const enhancedText = response.text().trim();

      if (!enhancedText) {
        throw new AppError(
          ERROR_CODES.UNKNOWN_ERROR,
          'AI 응답이 비어있습니다.'
        );
      }

      return enhancedText;
    } catch (error) {
      if (error instanceof AppError) throw error;
      if (import.meta.env.DEV) console.error('AI Enhancement Error:', error);
      throw new AppError(
        ERROR_CODES.UNKNOWN_ERROR,
        'AI 설명 개선에 실패했습니다.',
        error
      );
    }
  }

  /**
   * Build the enhancement prompt for Gemini — user inputs are sanitized before insertion.
   */
  static buildEnhancementPrompt(title, description) {
    const safeTitle = this.sanitizeForPrompt(title);
    const safeDescription = this.sanitizeForPrompt(description);
    return `당신은 스터디 홍보 전문가입니다. 다음 스터디 설명을 더 매력적이고 구체적으로 개선해주세요.
결과는 마크다운 형식을 사용하지 말고 순수 텍스트로만 제공해주세요.

스터디 제목: ${safeTitle}
현재 설명: ${safeDescription}`;
  }
}
