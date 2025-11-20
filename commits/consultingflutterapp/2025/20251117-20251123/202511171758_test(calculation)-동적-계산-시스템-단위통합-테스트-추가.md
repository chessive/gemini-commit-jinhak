test(calculation): 동적 계산 시스템 단위/통합 테스트 추가

새로운 동적 계산 시스템의 안정성과 정확성을 검증하기 위해 단위 테스트, 통합 테스트, 그리고 수동 검증 스크립트를 포함한 포괄적인 테스트 스위트를 추가함. (Phase 7)

### 주요 변경 사항

- **단위 테스트 추가 (`method_executor_test.dart`):**
  - `MethodExecutor`의 10가지 핵심 계산 메소드(`add`, `multiply`, `conditional` 등)를 개별적으로 검증하는 19개의 단위 테스트를 작성함.
  - `input`, `temp`, `output`, `constant` 4가지 값 타입 시스템과 예외 처리(e.g., `MissingConversionTableException`)에 대한 테스트 케이스를 포함함.

- **통합 테스트 추가 (`calculation_engine_test.dart`):**
  - `CalculationEngine`의 전체 계산 흐름을 검증하는 14개의 통합 테스트를 작성함.
  - 홍익대학교의 4가지 실제 입시 케이스(인문, 자연, 미술, 세종)를 `test_data`로 사용하여 실제와 유사한 환경에서 시스템의 동작을 검증함.

- **수동 검증 스크립트 추가 (`integration_validation_test.dart`):**
  - `dart run`으로 실행 가능한 시각적 검증 스크립트를 추가하여, 개발 중 계산 과정의 각 단계별 중간 결과를 사람이 쉽게 확인할 수 있도록 함.
  - 이모지(✅/❌)와 상세 로그를 통해 빠른 피드백을 제공함.

- **테스트 데이터 및 문서화 (`test_data/`, `README.md`):**
  - 홍익대 2026학년도 정시 4개 케이스에 대한 상세한 `inputValues`, `expectedOutput`, `configJSON`을 `hongik_26jungsi_test_cases.dart`에 정의함.
  - `test/services/calculation/README.md`를 작성하여 전체 테스트 구조, 실행 방법, 디버깅 가이드 등을 상세히 문서화함.

- **의존성 추가 (`pubspec.yaml`):**
  - `dev_dependencies`에 `test` 패키지를 추가하여 Flutter 프로젝트의 표준 테스트 프레임워크를 도입함.
