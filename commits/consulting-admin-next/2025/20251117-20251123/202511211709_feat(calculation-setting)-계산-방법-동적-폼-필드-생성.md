feat(calculation-setting): 계산 방법(CalcMethod) 동적 폼 필드 생성 및 Step Editor 고도화

계산 방법(CalcMethod)의 정의(Definition)에 따라 입력 필드를 동적으로 생성하여 설정 과정의 유연성과 정확성을 확보함. (Phase 3)

- **동적 폼 렌더링 구현 (`dynamic-field-renderer.tsx`):**
  - `SourceSchema`를 분석하여 텍스트, 선택(Enum), 배열, 객체 등 타입에 맞는 입력 필드를 자동으로 렌더링하는 컴포넌트 구현.
  - 재귀적 구조를 지원하여 중첩된 객체나 배열 형태의 복잡한 파라미터도 처리 가능하도록 함.

- **JSON Schema 파싱 및 검증 (`schema-parser.ts`):**
  - `ajv` 라이브러리를 도입하여 서버에서 내려주는 JSON Schema의 유효성을 검증하고, UI 렌더링에 적합한 `FieldDefinition` 형태로 변환하는 로직 구현.
  - `package.json`에 `ajv`, `ajv-formats` 의존성 추가.

- **Step Editor 기능 강화 (`step-editor.tsx`):**
  - 고정된 텍스트 입력 방식이었던 'Source' 필드를 `DynamicFieldRenderer`로 대체하여 메소드별 맞춤형 입력 폼 제공.
  - **예제 데이터 자동 채우기**: `examples` 데이터가 있는 경우 버튼 클릭 한 번으로 폼 값을 자동 완성하는 편의 기능 추가.
  - **툴팁 가이드**: 각 필드의 `description`을 툴팁으로 표시하여 사용자가 파라미터의 의미를 쉽게 이해할 수 있도록 개선.
  - **Target 필드 최적화**: 모든 메소드에서 공통으로 사용하는 Target 필드(type, field)는 고정 UI로 단순화하여 복잡도를 낮춤.
