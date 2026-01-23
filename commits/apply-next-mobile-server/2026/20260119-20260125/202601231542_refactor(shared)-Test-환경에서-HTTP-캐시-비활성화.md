refactor(shared): Test 환경에서 HTTP 캐시 비활성화 (TTL 0 설정)

- 테스트 실행 시 HTTP 캐시로 인한 사이드 이펙트를 방지하고 순수 로직 검증에 집중하기 위해 Test 환경에서 캐시 TTL을 0으로 설정하도록 개선함.
- **주요 변경 사항:**
  - `getEnvAwareTTL` 헬퍼 함수를 추가하여 환경에 따라 동적으로 TTL을 결정하도록 함.
  - `CacheTTL` 상수의 HTTP 엔드포인트 관련 항목들이 `getEnvAwareTTL`을 사용하도록 수정함.
