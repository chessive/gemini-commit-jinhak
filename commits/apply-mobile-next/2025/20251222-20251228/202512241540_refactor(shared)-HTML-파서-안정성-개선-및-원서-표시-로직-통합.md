refactor(shared): HTML 파서 안정성 개선 및 원서 표시 로직 통합

- 중첩 태그 및 미지원 태그 처리를 개선하여 HTML 파서의 안정성을 강화하고, 분산된 원서 표시 로직을 유틸리티로 통합함.
- **HTML 파서 개선 (`html-to-react.tsx`)**:
  - `TAG_CONFIGS` 기반의 전략 패턴을 도입하여 코드 중복을 제거하고 확장성을 높임.
  - `findMatchingCloseTag` 함수를 구현하여 중첩된 태그를 정확히 파싱하도록 수정함.
  - `stripUnsupportedTags` 함수를 추가하여 미지원 태그가 텍스트로 노출되는 문제를 방지함.
- **원서 표시 로직 통합 (`wonseo-display.ts`)**:
  - `getWonseoDisplayInfo` 유틸리티 함수를 신규 생성하여, 3개 컴포넌트(`paid`, `unpaid`, `pay-begin`)에 분산되어 있던 원서 정보 표시 로직을 통합함.
  - 입력/출력 속성명을 명확히 구분(`formatted` 접두사 사용)하여 혼란을 방지함.
