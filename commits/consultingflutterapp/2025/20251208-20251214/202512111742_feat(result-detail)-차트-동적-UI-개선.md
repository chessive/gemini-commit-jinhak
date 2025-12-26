feat(result-detail, custom-config): 경쟁률 차트, 데이터 개수별 동적 UI/로직 개선

상세 결과 화면의 경쟁률 차트(`CompetitionRatioChart`)가 보유한 데이터의 개수(1개, 2개, 3개 이상)에 따라 동적으로 제목을 변경하고, 데이터가 없는 경우를 우아하게 처리하도록 UI와 로직을 개선함.

- **주요 변경 사항**:
  - **1. 데이터 개수별 차트 제목 동적 적용**:
    - `CustomConfig`에 `titleTwoYear` 속성을 추가하여, 데이터가 2개일 때 "지난 2개년 경쟁률"과 같은 별도 제목을 표시할 수 있도록 확장함.
    - 차트 데이터 개수를 1개, 2개, 3개 이상으로 분기하여 각각 `titleOneYear`, `titleTwoYear`, `titleMultiYear` 설정을 적용하도록 로직을 수정함.

  - **2. "데이터 없음" UI 처리**:
    - `CustomConfig`에 `noDataMessage` 속성("데이터가 없습니다.")을 추가함.
    - 유효한 경쟁률 데이터(`LastYearApplyRatio` 등)가 하나도 없을 경우, 빈 차트 대신 설정된 메시지와 아이콘을 포함한 `_buildNoDataWidget`을 표시하도록 구현하여 사용자 경험을 개선함.

  - **3. 데이터 처리 안정성 강화**:
    - `_prepareChartData` 로직을 리팩토링하여, 경쟁률 값이 `null`이거나 `0.0` 이하인 연도 데이터를 차트에서 제외하도록 변경함. 이를 통해 무의미한 데이터가 차트에 표시되는 것을 방지함.

  - **4. `CustomConfig` 모델 확장 (`result_detail_config.dart`)**:
    - `ResultDetailCompetitionRatioChart` 클래스에 `titleTwoYear`와 `noDataMessage` 속성을 추가하고, `toJson`/`updateFromJson` 메서드에 반영하여 직렬화 기능을 확장함.
