feat(crawler): Rowspan 그룹화 및 파싱 로직 개선 (불일치 테이블 대응)

- HTML 테이블 파싱 전략을 기존 '전체 셀 순차 처리'에서 'TR 기반 행 단위 처리'(`assembleGridFromRatioTableRowBased`)로 전면 개편
  - 복잡한 `rowspan`/`colspan` 구조에서 셀 인덱스가 밀리거나 꼬이는 문제 해결
  - `activeRowspans` 배열을 통해 컬럼별 rowspan 상태를 정밀하게 추적
- `CrawlerDataService`에 `groupRowspanRows` 메서드를 추가하여 모집단위(`MajorName`) 기준 데이터 그룹화 구현
  - `MajorName`과 `Jiwon` 컬럼의 rowspan이 일치하지 않는 테이블(예: 삼육대)에서도 `effectiveRowspan`을 산출하여 데이터 누락 방지
  - 그룹화된 행들의 `SubMajorName`을 수집하여 쉼표로 연결된 단일 문자열로 병합
- `GridCellMeta` 인터페이스를 도입하여 셀의 값뿐만 아니라 원본 rowspan 정보(`isRowspanOrigin`, `rowspanGroupId`)를 보존
- `fillGridArea` 함수 리팩토링 및 `GridParsingResultWithMeta` 타입 정의로 메타데이터 처리 구조화
