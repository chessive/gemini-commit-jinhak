feat(auth): 내부 API 통신용 API Key 가드 구현 및 적용

- `InternalApiKeyGuard`를 구현하여 `x-internal-api-key` 헤더를 검증하는 내부 통신 보안 로직 추가
- `Dockerfile`에 `INTERNAL_API_KEY` 환경변수(ENV) 및 빌드 인자(ARG) 설정 추가
- `RatioCrawlController`의 캐시 무효화 API(`POST /ratio-crawl/cache/invalidate`)에 `InternalApiKeyGuard` 적용하여 보안 강화
- 기존 `RatioCrawlController` 레벨에 적용된 `CookieIpAuthGuard`를 개별 엔드포인트(`univ`, `major`, `seltype`)로 이동하여 인증 정책 세분화