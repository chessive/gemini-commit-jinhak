[UNIRATIO-82] feat(ratio-crawl): 최적화된 SP 적용 및 데이터 처리 안정성 강화

- `ratio-crawl` 리포지토리에서 경쟁률 조회 시 호출하는 저장 프로시저를 기존 `sp_RatioCrawl_Major_Filtered_Data`에서 성능이 개선된 `sp_RatioCrawl_Major_Optimized_Data`로 변경함
- `RatioCrawlMajorDto`와 `RatioCrawlSeltypeDto`의 `fromRawData` 정적 메서드에 `Number()`와 `?? undefined`를 사용하여 DB에서 반환된 `bigint`, `null` 등의 데이터 타입을 명시적으로 변환하고, 예기치 않은 타입 오류를 방지하도록 안정성을 높임
