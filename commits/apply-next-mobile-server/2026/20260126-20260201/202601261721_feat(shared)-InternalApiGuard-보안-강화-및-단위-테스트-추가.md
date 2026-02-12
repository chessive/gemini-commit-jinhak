feat(shared): InternalApiGuard 보안 강화 및 단위 테스트 추가

- `crypto.timingSafeEqual`을 사용한 API 키 비교 로직을 도입하여 타이밍 공격(Timing Attack) 방지
- `INTERNAL_API_KEY` 환경 변수 미설정 시 명시적으로 요청을 거부하도록 Fail-Secure 로직 적용
- 인증 실패 시 클라이언트 IP와 요청 경로를 포함한 상세 로깅 추가
- `InternalApiGuard`에 대한 종합적인 단위 테스트(`internal-api.guard.spec.ts`) 추가
- 내부 API 컨트롤러(`log-cleanup`, `log-upload`, `admission-period`, `cache`)에 보안 관련 JSDoc 추가
