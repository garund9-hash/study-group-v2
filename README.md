# Wit.me (윗미) - 스터디 모임 매칭 플랫폼

Wit.me는 당신의 성장을 응원하는 스터디 매칭 서비스입니다. 관심 있는 스터디를 찾고, 지식을 나누며 함께 성장하세요.

## 주요 기능

- **스터디 탐색**: 카드형 레이아웃으로 최신 스터디를 한눈에 확인 가능.
- **스터디 상세 및 신청**: 스터디의 목적과 진행 방식 확인 후 즉시 참여 신청.
- **모임장 대시보드**: 
  - 신청자 목록 확인 및 승인/거절 관리.
  - 승인된 참가자 명단을 CSV 형식으로 다운로드.
  - 최대 5개까지 스터디 생성 및 운영 가능.
- **AI 스터디 도우미**: 제미나이 AI를 활용하여 스터디 소개글을 더 매력적으로 개선.

## 기술 스택

- **Frontend**: React, Vite, Framer Motion, Vanilla CSS
- **Backend**: Firebase Authentication, Cloud Firestore
- **AI**: Gemini API (gemini-1.5-flash)
- **Icons**: Lucide React

## 시작하기

1. **환경 변수 설정**: `.env.local` 파일에 Firebase와 Gemini API 키를 설정합니다.
   ```env
   VITE_FIREBASE_API_KEY=...
   VITE_GEMINI_API_KEY=...
   ...
   ```

2. **의존성 설치**:
   ```bash
   npm install
   ```

3. **개발 서버 실행**:
   ```bash
   npm run dev
   ```

## 프로젝트 규칙 및 진행

- 모든 데이터는 Firebase Firestore에 실시간으로 반영됩니다.
- 모임장(Organizer) 권한은 회원가입 시 선택할 수 있습니다.
- 스터디 생성은 모임장당 최대 5개로 제한됩니다.
