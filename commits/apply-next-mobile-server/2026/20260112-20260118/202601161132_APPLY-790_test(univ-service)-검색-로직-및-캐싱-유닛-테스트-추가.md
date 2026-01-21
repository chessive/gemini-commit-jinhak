[APPLY-790] test(univ-service): 검색 로직 및 캐싱 유닛 테스트 추가

- 대학 서비스 검색 API 마이그레이션에 따른 데이터 정합성과 신규 캐싱 로직의 안정성을 검증하기 위해 유닛 테스트를 대폭 확충함.
- **주요 테스트 내용:**
  - **리포지토리 테스트 (`univ-service.repository.spec.ts`):**
    - `getServiceList`: 다중 결과셋(진학/유웨이) 병합 및 Cooperator 할당 로직 검증.
    - `getSearchUnivIDs`: 검색어 및 지역 필터링 파라미터 전달과 DB 호출 여부 검증.
  - **서비스 테스트 (`univ-service.service.spec.ts`):**
    - `searchUnivList`: 신규 V2 로직 기반의 필터링(상태, 모집시기, 대학구분) 및 정렬(학교명, 접수시작, 마감임박) 통합 검증.
    - 캐시 히트/미스 시나리오에 따른 데이터 반환 경로 검증.
    - `toSearchCategoryName`, `toDisplayCategoryName` 등 매핑 유틸리티 테스트 추가.
- **성과:**
  - `univ-service` 모듈 전체 커버리지 94.52% 달성 (Repository 100%, Service 91.76%).