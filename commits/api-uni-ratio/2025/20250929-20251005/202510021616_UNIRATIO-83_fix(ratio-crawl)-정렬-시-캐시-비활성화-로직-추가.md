[UNIRATIO-83] fix(ratio-crawl): 정렬 시 캐시 비활성화 로직 추가

- `RatioCrawlService`의 `hasFilters` 메서드에 `sortField`와 `sortDirection` 유무를 확인하는 조건을 추가하여, 사용자가 정렬 옵션을 지정했을 경우 캐시를 사용하지 않고 실시간으로 데이터를 조회하도록 수정함