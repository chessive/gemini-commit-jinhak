feat(banner, internal): 배너 캐시 중앙 관리 시스템 통합

- 배너 관련 HTTP 캐시를 중앙 관리 시스템에 등록하여 내부 API를 통한 효율적인 제어 환경을 구축함.
- **주요 변경 사항:**
  - **캐시 키 중앙 등록 (`shared/constants`):**
    - `CacheKeyName` enum 및 `CACHE_KEY_MAP`에 배너 검색 레이어와 내부 운영 캐시 키 추가.
    - `/internal/cache` API를 통해 배너 캐시를 직접 조회하고 강제 무효화할 수 있도록 연동함.
  - **TTL 관리 체계 개선:**
    - `banner.controller.ts`의 하드코딩된 TTL을 중앙 `CacheTTL` 상수로 대체함.
    - 테스트 환경에서 TTL을 1ms로 자동 조정하는 `getEnvAwareTTL`을 적용하여 테스트 효율성을 높임.
  - **문서 및 테스트 최신화:**
    - `CacheController`의 Swagger 문서와 예제 응답 데이터에 신규 등록된 배너 캐시 정보를 반영함.
    - `cache.controller.spec.ts`에 배너 캐시 조회 및 무효화 시나리오에 대한 유닛 테스트 4종을 추가함.
  - **코드 정리:**
    - `banner.constants.ts`에서 실제 사용되지 않거나 값이 불일치하는 기존 `BANNER_CACHE` 상수를 제거함.