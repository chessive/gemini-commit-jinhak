refactor(scoring): 계산 엔진 입력값(`inputValues`) 맵 확장

동적 계산 엔진(CalculationEngine)이 복잡한 조건(예: 모집단위, 계열)을 처리할 수 있도록, 계산 시점에 생성되는 `inputValues` 맵의 정보를 확장함.

### 주요 변경 사항

- **ApplyMajor 전체 속성 주입:**
  - `_buildInputValues` 메서드에서 `major.toJson()`을 호출하여, `ApplyMajor` 모델의 모든 속성(`CourseName`, `SelTypeName`, `ETC5` 등)을 `inputValues`에 병합하도록 수정함.
  - 이를 통해 계산식(JSON) 내 `conditional` 메서드에서 캠퍼스, 계열 등 다양한 조건 분기가 가능해짐.

- **SatCalcCase 객체 주입:**
  - `satCalcCase.toJson()`의 결과를 `inputValues['satCalcCase']` 키로 추가하여, 단순 반영비율 외의 전형 관련 모든 정보를 조건 분기에 활용할 수 있도록 확장함.

- **테스트 데이터 일관성 확보:**
  - 홍익대학교 테스트 케이스(`hongik_26jungsi_test_cases.dart`)에서 사용되던 임시 키 `'CampusName'`을 실제 모델 속성인 `'ETC5'`로 통일하여 테스트 데이터와 실제 로직의 일관성을 맞춤.
