[APPLY-790] refactor(shared, univ-service): 캐시 키/TTL 중앙화 및 Enum 정의

- 프로젝트 전반에 분산된 캐시 키와 TTL 설정을 중앙에서 관리하고, 검색 정렬을 위한 Enum을 추가하여 유지보수성을 향상시킴.
- **주요 변경 사항:**
  - **캐시 상수 중앙화 (`shared/constants`):**
    - `cache-keys.constant.ts`: `CacheKeyName` Enum 및 `CACHE_KEY_MAP` 정의.
    - `cache-ttl.constant.ts`: `CacheTTL` 상수를 정의하고 동적 TTL 함수(`getTimeUntilNextHour`)를 통합함.
  - **Enum 추가 (`univ-service`):**
    - `search-service-order.enum.ts`: 프로시저 반환값 매핑을 위한 `StatusOrder`, `UnivOrder` Enum 추가.
  - **하위 호환성:**
    - `internal/enums/cache-key.enum.ts`를 deprecated 처리하고 `shared` 모듈을 re-export하도록 수정함.