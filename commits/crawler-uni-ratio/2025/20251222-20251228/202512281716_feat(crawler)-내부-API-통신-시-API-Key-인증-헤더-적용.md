feat(crawler): 내부 API 통신 시 API Key 인증 헤더 적용

- `CacheInvalidationInterceptor`에서 `api-uni-ratio` 캐시 무효화 요청 시 `x-internal-api-key` 헤더를 포함하도록 수정
  - `ConfigService`를 통해 `INTERNAL_API_KEY` 환경 변수를 로드하고, 미설정 시 요청을 건너뛰도록 검증 로직 추가
  - 보안 강화를 위해 내부 API 통신에 API Key 인증 방식 적용
- `CHANGELOG.md`에 보안 업데이트 내역 추가
