[APPLY-790] feat(univ-service): 검색 API 마이그레이션 및 캐싱 최적화

- PC 백엔드 리팩토링 기준에 맞춰 대학 서비스 검색 로직을 마이그레이션하고, 2단계 캐싱 아키텍처를 도입하여 성능을 최적화함.
- **주요 변경 사항:**
  - **프로시저 통합 (`univ-service.repository`):**
    - `SPC_UnivList` + `SPC_UnivListOther` → `SPC_Site_UnivList` 단일 프로시저 호출로 전환.
    - 검색어/지역 필터 보조를 위한 `SPC_Site_GetUnivIDBySearchFilter` 호출 추가.
  - **검색 및 정렬 로직 리팩토링 (`univ-service.service`):**
    - PC와 동일한 관련도순 정렬(`StatusOrder` → `UnivOrder` → `ShortName`) 로직 구현.
    - 메모리 기반 필터링 및 정렬을 수행하는 `applySearchFilterV2`, `applySortV2` 등 신규 로직 적용.
  - **2단계 캐싱 아키텍처 도입:**
    - Controller의 `HourlyCacheInterceptor` 외에 Service 레이어에 원본 데이터 캐싱(`CACHE_MANAGER`) 추가.
    - 정각 동기화 TTL을 적용하여 데이터 정합성 보장 및 DB 호출 횟수 대폭 감소.
  - **데이터 정합성 개선:**
    - `AreaName`, `HomePage` 필드 매핑 보완 및 `getAreaNameByCode` 유틸리티 추가.
  - **기타 변경:**
    - `UnivService`, `HomeController` 등에서 중앙화된 캐시 상수 사용하도록 수정.