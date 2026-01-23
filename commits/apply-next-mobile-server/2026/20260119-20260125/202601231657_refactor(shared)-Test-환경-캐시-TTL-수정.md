refactor(shared): Test 환경 캐시 TTL을 0에서 1ms로 수정

- 테스트 환경에서 캐시 TTL을 0으로 설정할 경우 `cache-manager`가 이를 '영구 캐시'로 처리하여 테스트 간 데이터 격리가 되지 않는 문제를 수정함.
- **주요 변경 사항:**
  - `CacheTTL` 상수 정의 방식을 Getter에서 다시 `getEnvAwareTTL` 헬퍼 함수 사용으로 변경함.
  - Test 환경일 때 반환되는 TTL 값을 `0`에서 `1`로 수정하여, 의도대로 '즉시 만료'되도록 개선함.
