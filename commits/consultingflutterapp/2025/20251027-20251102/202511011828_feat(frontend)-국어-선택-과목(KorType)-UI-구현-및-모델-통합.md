feat(scoring): 국어 선택 과목(KorType) UI 및 데이터 모델 구현

`CustomConfig` 모델 확장을 기반으로, 국어 선택 과목(언어와 매체, 화법과 작문)을 위한 프론트엔드 UI를 구현하고 전체 데이터 흐름을 완성함.

### 주요 변경 사항

- **데이터 모델 확장:**
  - `consulting_model`: `KorType` enum을 추가하고, `CalcConfig`에 `isActiveKorType` 맵을 추가하여 계산 로직과의 연동 기반 마련.
  - `score_input`: `korType` 필드를 추가하고, `setScoreType` 메서드를 확장하여 국어 타입 선택을 처리.
  - `ConsultHistory`: 상담 이력에 `korType`을 포함하여 선택된 과목 정보를 저장 및 조회할 수 있도록 직렬화/역직렬화 로직 수정.

- **UI 구현:**
  - `input_form_screen` / `input_form_jungsi_screen`: 국어 과목 UI에 `_isKorSelected` 상태를 추가하여 선택 과목 토글 기능을 구현.
  - `subject_form_field` / `subject_form_field_jungsi`: `ScoreTypeToggle` 위젯이 국어 과목에도 표시되도록 조건부 렌더링 로직 확장.

- **서비스 및 상태 관리:**
  - `input_form_service`: `_getActiveKorScoreTypes` 함수를 추가하여 CustomConfig에 따라 활성화된 국어 과목 목록을 동적으로 가져오도록 함.
  - `calculate_screen`: `_setDefaultScoreTypes`에서 국어 과목의 기본 선택 값을 설정하는 로직 추가.
  - `foundation_store`: `setConsultHistoryByCalculate`에서 `korType`을 올바르게 변환하여 저장하도록 수정.

이 변경은 기존 수학 과목 선택(`MathType`)과 동일한 UI/UX 패턴을 따르며, CustomConfig을 통해 동적으로 UI를 제어할 수 있도록 구현됨.