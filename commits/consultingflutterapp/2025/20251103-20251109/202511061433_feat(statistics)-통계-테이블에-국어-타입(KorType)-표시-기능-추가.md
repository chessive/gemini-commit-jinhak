feat(statistics): 통계 테이블에 국어 타입(KorType) 표시 기능 추가

ConsultHistory JSON 마이그레이션 후 통계 화면(`stuinfo_statistics_table_widget.dart`)에 국어 타입(korType)을 표시하는 기능을 추가하여 UI 일관성을 확보함.

### 주요 변경 사항

- **컬럼 정의 수정 (`stuinfo_consult_history_columns.dart`):**
  - 기존 '국어타입' 별도 컬럼을 제거하고, '국어' 컬럼의 너비를 수학과 동일한 `0.15`로 확장하여 타입 정보를 포함할 공간을 확보함.

- **데이터 소스 수정 (`stuinfo_consult_history_data_source.dart`):**
  - `_ScoreData` 모델에 `korType` 필드를 추가하고, `_extractScoreData()` 메서드에서 `korType`을 추출하도록 함.
  - `_createDataGridRowJungsi()` 메서드에서 국어 점수 셀을 생성할 때, `CustomConfig`의 `isActiveKorType` 설정에 따라 `korType`을 동적으로 포함하여 표시하도록 로직을 변경함.
  - `_createScoreCell()` 메서드가 `type` 파라미터를 받아 점수와 타입을 함께 렌더링하도록 개선.

### 개선 효과

- **UI 일관성:** 국어, 수학, 탐구 과목 모두 점수와 선택 과목 타입이 하나의 셀에 함께 표시되어 통계 테이블의 시각적 일관성을 높임.
- **동적 제어:** `CustomConfig`의 `isActiveKorType` 설정에 따라 국어 타입의 표시 여부를 동적으로 제어할 수 있도록 함.
- **데이터 무결성:** `ConsultHistory` 모델의 `korType` 필드 변경 사항이 통계 화면에 정확히 반영됨.
