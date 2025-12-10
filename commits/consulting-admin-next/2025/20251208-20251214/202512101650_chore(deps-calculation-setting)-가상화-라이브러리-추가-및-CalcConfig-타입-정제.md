chore(deps, calculation-setting): 가상화 라이브러리 추가 및 CalcConfig 타입 정제

새로운 가상화 라이브러리를 추가하고, `CalcConfig` 모델의 데이터 타입을 백엔드와의 일관성을 위해 정제함.

### 주요 변경 사항

- **의존성 업데이트 (`package.json`, `package-lock.json`):**
  - `@tanstack/react-virtual` 라이브러리 추가: 대량의 데이터 렌더링 시 성능 최적화를 위한 가상화 기능을 지원. (특히 변환표 상세 Dialog의 `compare-table`과 같은 컴포넌트에서 활용)
  - 기타 기존 의존성들의 내부 메타데이터(`peer`, `license`, `caniuse-lite` 버전 등) 업데이트.

- **`CalcConfig` 타입 정제 (`src/pages_fsd/calculation-setting/models/types/calc-config.ts`):**
  - `CalcConfig` 타입 내 `ServiceID`, `CalcConfigID`, `HSBCalcCaseNo`, `SATCalcCaseNo`, `CalcMethodID` 필드의 타입을 `string`에서 `number`로 변경.
  - 백엔드 API에서 제공되는 실제 데이터 타입과의 불일치를 해소하고, 타입 안전성 및 데이터 일관성을 확보함.
