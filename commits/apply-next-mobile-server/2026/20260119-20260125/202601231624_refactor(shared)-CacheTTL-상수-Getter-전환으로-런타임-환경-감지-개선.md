refactor(shared): CacheTTL 상수 Getter 전환으로 런타임 환경 감지 개선

- 테스트 환경에서 HTTP 캐시 비활성화(TTL=0) 로직이 모듈 로드 시점에 고정되는 문제를 해결하기 위해, `CacheTTL` 상수를 Getter 방식으로 리팩토링함.
- **주요 변경 사항:**
  - `getEnvAwareTTL` 헬퍼 함수를 제거하고, 각 HTTP 캐시 상수를 `get` 접근자로 변경함.
  - 이를 통해 상수가 참조되는 런타임 시점에 `isNodeEnv.test()`를 확인하여 정확한 TTL 값을 반환하도록 개선함.
