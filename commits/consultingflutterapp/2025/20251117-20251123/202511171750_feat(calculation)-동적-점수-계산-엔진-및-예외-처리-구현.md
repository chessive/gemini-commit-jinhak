feat(calculation): 동적 점수 계산 엔진 및 예외 처리 구현

DB 기반 동적 계산 시스템의 핵심 로직인 `CalculationEngine`과 `MethodExecutor`를 구현함. (Phase 5)

### 주요 변경 사항

- **`CalculationEngine` 구현 (`calculation_engine.dart`):**

  - `ConfigJSON`의 `steps` 배열을 순차적으로 실행하여 최종 점수를 계산하는 핵심 엔진.
  - 계산 과정의 모든 중간값(`tempValues`)과 최종값(`outputValues`), 단계별 결과(`stepResults`)를 `CalculationResult` 객체로 반환하여 디버깅 및 추적이 용이하도록 설계함.

- **`MethodExecutor` 구현 (`method_executor.dart`):**

  - `CalculationEngine`의 각 단계를 실제로 수행하는 실행기.
  - `add`, `multiply`, `convertFromTable`, `averageTopN`, `weightedSum`, `conditional` 등 10가지의 표준 계산 메소드를 구현함.
  - `_getValue` 헬퍼를 통해 `input`, `temp`, `output`, `constant` 4가지 타입의 값을 동적으로 조회하는 로직을 포함함.

- **사용자 정의 예외 클래스 추가 (`lib/services/calculation/exceptions/`):**
  - `CalculationException`: 계산 실패 시 단계 번호와 전체 결과를 포함하는 포괄적 예외.
  - `UnsupportedMethodException`: 지원하지 않는 메소드 호출 시 발생하는 예외.
  - `MissingConversionTableException`: 필요한 변환 테이블을 찾지 못했을 때 발생하는 예외.
