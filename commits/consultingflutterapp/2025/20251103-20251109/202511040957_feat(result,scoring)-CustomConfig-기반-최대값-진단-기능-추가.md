feat(result, scoring): CustomConfig 기반 최대값 진단 기능 추가

기존 `ConfigModel`의 `IsUseMaxScore`뿐만 아니라, `CustomConfig`의 `diagnosisMaximum` 설정을 통해서도 '최대값(안정)' 진단 로직이 활성화되도록 기능을 확장함. 이를 통해 서비스별로 유연하게 진단 기준을 제어할 수 있음.

### 주요 변경 사항

- **점수 계산 로직 수정 (`calculate_service.dart`):**
  - `calcDiagnosisSat` 메서드가 `CustomConfig`의 `diagnosisScoreColumns.diagnosisMaximum` 값을 조회하도록 변경.
  - `isUseMaxScore` 또는 새로운 `isUseDiagnosisMaximumScore` 조건 중 하나라도 충족되면 '최대값' 기반의 진단 로직(`DiagnosisResult.EXCELLENT`)이 실행되도록 수정.

- **결과 화면 필터 UI 개선 (`CheckboxSearch.dart`):**
  - '진단선택' 체크박스 필터 영역에서 `isUseDiagnosisMaximumScore` 설정을 확인하여, 백엔드 계산 로직과 일관되게 '안정' 옵션이 표시되도록 수정.

### 기대 효과
- 서비스별 요구사항에 맞춰 '최대값' 진단 기준을 동적으로 활성화할 수 있어 유연성 증대.
- 기존 설정(`IsUseMaxScore`)과 하위 호환성을 유지하면서 새로운 `CustomConfig` 기반의 제어 방식을 도입하여 확장성 확보.