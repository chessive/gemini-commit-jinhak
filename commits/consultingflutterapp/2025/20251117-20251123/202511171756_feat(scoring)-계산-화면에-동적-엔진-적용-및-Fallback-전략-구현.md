feat(scoring): 계산 화면에 동적 엔진 적용 및 Fallback 전략 구현

점수 계산 화면(`CalculateScreen`)에 새로운 동적 계산 엔진(`CalculationEngine`)을 통합하고, 안정적인 운영을 위한 Fallback 전략을 구현함. (Phase 8)

### 주요 변경 사항

- **동적 계산 엔진 연동 (`calculate_service.dart`):**
  - `calcMyScore` 메소드 내에, `ScoreCalcConfig` 설정이 존재할 경우 새로운 `CalculationEngine`을 우선적으로 사용하도록 분기 로직을 추가함.
  - `_calculateWithEngine` 헬퍼 메소드를 구현하여 엔진 실행에 필요한 파라미터(methodConfig, inputValues, conversionTables)를 준비하고 전달하는 과정을 캡슐화함.
  - `_buildInputValues` 헬퍼 메소드를 추가하여, `InputScore` 객체와 `ApplyMajor` 정보를 엔진이 요구하는 `Map<String, dynamic>` 형태로 변환하는 로직을 구현함.

- **안전한 Fallback 전략 구현 (`calculate_service.dart`):**
  - `ScoreCalcConfig` 설정이 없거나, `CalculationEngine` 실행 중 예외가 발생했을 때, 기존의 하드코딩된 계산 로직(`calcException`)으로 자동 전환되는 `try-catch` 기반의 Fallback 메커니즘을 도입함.
  - `developer.log`를 사용하여 각 분기(Engine 사용, Fallback 전환, 에러 발생 등)의 흐름을 명확하게 추적할 수 있도록 함.

- **백그라운드 설정 로드 (`calculate_screen.dart`):**
  - `CalculateScreen`의 `initState`에서 `_loadCalcConfigIfNeeded`를 호출하여, 화면 진입 시 필요할 경우 계산 설정을 백그라운드에서 미리 로드하도록 개선함.
