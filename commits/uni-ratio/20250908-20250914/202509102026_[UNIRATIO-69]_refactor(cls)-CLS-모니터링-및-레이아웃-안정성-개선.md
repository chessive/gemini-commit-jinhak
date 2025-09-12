[UNIRATIO-69] refactor(cls): CLS 모니터링 및 레이아웃 안정성 개선

- Clarity 성능 점수 저하 문제(UNIRATIO-69) 대응을 위해 CLS(Cumulative Layout Shift)를 개선합니다.
- **CLS 모니터링 도구 추가 (개발 환경 전용)**
  - `PerformanceObserver`를 사용하여 CLS를 추적하는 `use-cls-monitor` 훅을 구현했습니다.
  - 실시간 CLS 점수와 원인이 되는 요소를 시각적으로 확인할 수 있는 `CLSDashboard` 컴포넌트를 추가했습니다.
- **레이아웃 안정성 강화**
  - 루트 요소에 `contain: layout` 속성을 적용하여 렌더링 범위를 제한하고, 하위 요소의 레이아웃 변경이 전체에 미치는 영향을 최소화했습니다.
  - 데이터 테이블에 `table-layout: fixed`를 적용하여 내용 변화에 따른 테이블 레이아웃의 변동을 방지했습니다.