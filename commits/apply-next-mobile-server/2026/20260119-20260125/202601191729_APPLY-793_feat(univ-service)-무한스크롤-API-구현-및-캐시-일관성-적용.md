[APPLY-793] feat(univ-service): 무한스크롤 API 구현 및 캐시 일관성 적용

- 검색 페이지의 UX 개선을 위해 커서 기반 무한스크롤 API를 구현하고, 캐시 갱신 시 데이터 중복/누락을 방지하기 위한 버전 관리 메커니즘을 적용함.
- **주요 변경 사항:**
  - **엔드포인트 추가 (`GET /univ-service/search-infinite`):**
    - 기존 `search-univ-list`와 분리된 무한스크롤 전용 엔드포인트 생성.
    - `HourlyCacheInterceptor`를 적용하여 정각 단위 캐싱 전략 유지.
  - **서비스 로직 구현 (`searchInfinite`):**
    - `PaginationService`를 통해 `cursor` 파라미터를 디코딩하여 offset 기반으로 데이터 슬라이싱 처리.
    - 기존 검색/필터링/정렬 로직(`applySearchFilterV2`, `applySortV2` 등)을 재활용하여 구현 효율성 확보.
    - Smart Loading(마감 데이터 연동) 전략을 동일하게 적용.
  - **캐시 일관성 전략:**
    - 응답에 `cacheTimestamp` (정각 기준)를 포함하여 클라이언트가 캐시 갱신 여부를 감지할 수 있도록 함.
    - 이를 통해 사용자가 스크롤 중 캐시가 갱신(정각 경과)되어도 리스트를 초기화하여 데이터 정합성을 유지할 수 있음.