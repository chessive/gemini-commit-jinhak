fix(database, crawler): SmartRatio 테이블 스키마 경로 수정 및 디버깅 로그 추가

- `SmartRatio` 테이블 조회 쿼리에서 스키마 경로를 `dbo.SmartRatio` → `ApplyProvide.dbo.SmartRatio`로 수정
  - `FIND_SMART_RATIO_LIST`, `FIND_BY_RATIO_LINK`, `FIND_BY_YEAR_AND_CATEGORY` 쿼리 전체 적용
  - DB 컨텍스트 명시를 통한 쿼리 오류 방지
- `CrawlerDataService`에 특정 조건(`gunId == '2'`)일 때 그리드 데이터를 출력하는 디버깅 로그(`console.log`) 추가
