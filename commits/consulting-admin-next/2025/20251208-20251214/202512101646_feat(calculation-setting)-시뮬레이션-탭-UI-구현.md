feat(calculation-setting): 시뮬레이션 탭 UI 구현

계산 설정 시뮬레이션 탭의 전체적인 UI와 사용자 인터랙션을 구현함.

- **입력 단계 UI (`simulation-input-phase.tsx`):**
  - 과목별 점수 입력을 위한 폼(`ScoreInputForm`, `ScoreInputField`) 구현.
  - 점수 타입 선택(원점수/표준점수 등) 토글 UI(`ScoreTypeToggle`) 및 저장된 점수 관리(`SavedScoresManager`) 기능 추가.
  - 랜덤 점수 생성 다이얼로그(`RandomScoreDialog`) 연동.

- **결과 단계 UI (`simulation-result-phase.tsx`):**
  - 계산 결과 요약 및 상세 실행 로그(`StepExecutionViewer`) 표시.
  - `SimulationResultList`를 통해 전체 계산 과정의 입력과 출력값을 시각적으로 제공.

- **통합 탭 컴포넌트 (`simulation-tab.tsx`):**
  - 입력 단계와 결과 단계를 전환하며 시뮬레이션 전체 흐름을 제어하는 메인 탭 컴포넌트 구현.
