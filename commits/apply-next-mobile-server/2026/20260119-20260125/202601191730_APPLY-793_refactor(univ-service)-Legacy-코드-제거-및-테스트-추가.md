[APPLY-793] refactor(univ-service): Legacy 코드 제거 및 테스트 추가

- 무한스크롤 API 구현 완료에 따라 더 이상 사용되지 않는 구형 검색 로직을 제거하고, 신규 기능에 대한 단위 테스트를 확충함.
- **주요 변경 사항:**
  - **Legacy 코드 제거:**
    - `searchUnivListLegacy`: 구형 프로시저 호출 방식의 메서드 제거.
    - `applyTimeBasedCategoryFilter`, `fetchUnivFilter`: 구형 시간 기반 필터링 로직 제거.
    - 관련 테스트 코드 삭제.
  - **테스트 추가:**
    - **Service 테스트:** `searchInfinite` 메서드에 대한 11개 테스트 케이스 추가 (커서 동작, 필터링, 정렬, 마감 데이터 연동, 캐시 타임스탬프 검증).
    - **Controller 테스트:** 신규 엔드포인트 호출 및 DTO 전달 검증 테스트 추가.
- **성과:**
  - 불필요한 코드 약 460줄 제거로 유지보수성 향상.
  - `univ-service` 모듈 테스트 194개 통과로 안정성 확보.