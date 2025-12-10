feat(calculation-setting): 변환표 상세 Dialog 구현 (검색, 비교, 그래프, 가상화)

시뮬레이션 기능의 핵심 요소 중 하나인 변환표(ScoreConversionTable)의 상세 내용을 시각적으로 탐색하고 분석할 수 있는 Dialog를 구현함.

- **변환표 상세 Dialog (`conversion-table-detail-dialog.tsx`):**
  - 특정 변환표의 모든 규칙과 매핑을 표시하는 모달 Dialog 구현.
  - 검색, 필터링, 정렬 기능을 통해 규칙을 쉽게 찾을 수 있도록 함.

- **데이터 시각화 컴포넌트 (`conversion-graph.tsx`):**
  - 변환표의 입력-출력 관계를 그래프 형태로 시각화하여 사용자가 변환 로직을 직관적으로 이해할 수 있도록 함.

- **비교 테이블 (`compare-table.tsx`):**
  - 여러 변환표 또는 조건별 변환 결과를 비교할 수 있는 테이블 컴포넌트 구현.
  - 가상화를 적용하여 대량의 데이터도 효율적으로 렌더링.

- **유틸리티 및 보조 컴포넌트 (`conversion-table-utils.ts`, `conversion-chips.tsx`, `rules-table.tsx`):**
  - 변환표 데이터 처리 유틸리티와 UI 표시를 위한 보조 컴포넌트 추가.
