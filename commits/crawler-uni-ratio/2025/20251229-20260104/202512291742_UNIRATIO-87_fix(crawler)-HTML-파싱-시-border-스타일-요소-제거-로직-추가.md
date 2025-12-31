[UNIRATIO-87] fix(crawler): HTML 파싱 시 border 스타일 요소 제거 로직 추가

- **테이블 파싱 전처리 기능 강화 (`ratio-table.parser.ts`)**
  - `removeStyledElements` 유틸리티 함수 추가
    - `style` 속성에 'border' 키워드가 포함된 요소(`span`, `b`)를 DOM에서 완전히 제거하는 기능 구현
    - 대소문자 구분 없이 처리하여 다양한 HTML 패턴에 대응
    - `ElementCleanupOptions` 인터페이스를 통해 제거 대상 태그와 키워드 설정 가능하도록 설계
  - `assembleGridFromRatioTableRowBased` 함수에 적용
    - 셀 데이터 추출(`cleanHtmlContent`) 이전에 스타일 기반 요소 제거 로직을 먼저 실행
    - 대구가톨릭대, 대구대 등에서 'RISE 사업' 태그와 같이 불필요한 border 스타일 요소가 데이터에 포함되는 문제 해결
