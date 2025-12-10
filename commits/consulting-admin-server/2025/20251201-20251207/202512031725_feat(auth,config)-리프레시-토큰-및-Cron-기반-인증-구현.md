feat(auth, config): HttpOnly Refresh Token 및 자동 정리 Cron 기반 인증 시스템 구현

- **Refresh Token 및 HttpOnly Cookie 인증 도입 (보안 강화)**
  - 로그인 성공 시, Refresh Token을 HttpOnly, Secure, SameSite=Lax 속성의 쿠키로 설정하여 XSS 및 CSRF 공격에 대한 보안 강화
  - Access Token은 기존과 같이 JSON 응답 본문으로 전달하여 메모리에 저장
  - `/auth/refresh` 엔드포인트를 통해 쿠키에 담긴 Refresh Token으로 Access Token을 안전하게 재발급
  - **Refresh Token Rotation**: 토큰 재발급 시 기존 Refresh Token은 무효화하고 새로운 Token을 발급하여 탈취된 토큰의 유효 기간을 최소화

- **로그아웃 기능 개선**
  - `/auth/logout` 엔드포인트는 서버 측에서 Refresh Token을 무효화하고, 클라이언트의 쿠키를 즉시 만료시켜 안전한 로그아웃 보장

- **DB 및 Prisma 스키마 확장**
  - `AdminRefreshTokens` 테이블(RefreshToken 모델)을 추가하여 Refresh Token의 해시, 만료일, 폐기 여부 등을 안전하게 관리
  - 다중 DB 환경(`dev`, `test`, `real`)에서 타입 충돌을 방지하기 위해 `shared/prisma/types.ts`에 네임스페이스 기반 타입 정의 추가

- **만료 토큰 자동 정리 기능 (Cron Job)**
  - `@nestjs/schedule`을 활용하여 매일 새벽 3시에 만료된 Refresh Token을 DB에서 자동으로 삭제하는 Cron Job 구현 (`TokenCleanupService`)
  - DB에 불필요한 데이터가 쌓이는 것을 방지하고 시스템을 최적화

- **기타 변경사항**
  - `bcrypt`, `cookie-parser` 등 인증 관련 의존성 패키지 추가
  - CORS 설정에 `credentials: true` 옵션을 추가하여 쿠키 기반 인증 지원
  - `AuthGuard`에서 JWT payload의 `type`을 검증하여 Access/Refresh 토큰의 역할을 명확히 분리
