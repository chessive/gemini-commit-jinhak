fix(consult-history): 탐구 선택 과목(res-option-type) 저장 누락 버그 수정

성적 계산 화면에서 사용자가 선택한 탐구 과목명(`res1OptionType`, `res2OptionType`)이 상담 이력(`ConsultHistory`)의 `student_info_json`에 저장되지 않는 버그를 수정함.

### 원인

`foundation_store.dart`의 `setConsultHistoryByCalculate` 메서드에서 `inputScore`의 탐구 과목명 필드를 `studentInfo` 맵에 추가하는 로직이 누락되어 있었음.

### 주요 변경 사항

- **저장 로직 추가 (`foundation_store.dart`):
  - `setConsultHistoryByCalculate` 메서드에 `res1OptionType`과 `res2OptionType`을 `studentInfo`에 추가하는 코드를 삽입하여 데이터가 정상적으로 저장되도록 수정함.

- **수시 전형 예외 처리 (`foundation_store.dart`):
  - 수시 전형(HSB 점수 입력) 시, 정시 전형 정보인 `res1OptionType`과 `res2OptionType` 필드를 `null`로 초기화하는 로직을 추가하여 데이터 정합성을 확보함.

- **방어적 코딩 적용 (`score_input.dart`):
  - `setResOptionType` 메서드가 `ScoreType.res1`과 `ScoreType.res2`만 명시적으로 처리하도록 수정하여 안정성을 높임.

### 기대 효과

- **데이터 무결성 확보**: 사용자가 선택한 탐구 과목명이 상담 이력에 정확히 저장됨.
- **정확한 분석 기반 마련**: 향후 통계 및 엑셀 내보내기 기능에서 정확한 탐구 과목명 데이터를 활용할 수 있게 됨.
