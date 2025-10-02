[UNIRATIO-83] feat(ratio-crawl): 경쟁률 API 메모리 캐싱 기능 구현

- `@nestjs/cache-manager`를 사용하여 경쟁률 조회 API에 메모리 캐싱을 적용함
  - `RatioCrawlModule`에 `CacheModule`을 등록하고, TTL은 0(무제한), 최대 200개 항목으로 설정
- `RatioCrawlService`에 조건부 캐싱 로직을 구현함
  - 필터(`region`, `schoolType`, `keyword`, `gunId`)가 없는 기본 조회(대학, 모집단위, 전형)에만 캐싱을 적용하여 효율성을 높임
  - `hasFilters` 헬퍼 메서드를 통해 필터링 여부를 판단하고, `generateCacheKey`로 캐시 키를 동적 생성함
  - `Cache HIT/MISS` 상황을 `Logger`로 기록하여 추적 가능하도록 함
- `POST /ratio-crawl/cache/invalidate` API 엔드포인트를 추가하여 캐시를 수동으로 무효화하는 기능을 구현함
  - `types` 쿼리 파라미터를 통해 `univ`, `major`, `seltype` 등 특정 타입의 캐시만 선택적으로 삭제하거나, 파라미터가 없으면 전체 캐시를 삭제함
- `package.json`에 `@nestjs/cache-manager`, `cache-manager` 의존성을 추가함