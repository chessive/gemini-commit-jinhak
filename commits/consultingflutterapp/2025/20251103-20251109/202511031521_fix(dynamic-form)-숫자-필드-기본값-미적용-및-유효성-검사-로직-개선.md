fix(dynamic-form): 숫자 필드 기본값 미적용 및 유효성 검사 로직 개선

동적 폼의 숫자 입력 필드(`NumberFieldWidget`)가 스키마에 정의된 `defaultValue`를 초기 렌더링 시 반영하지 못하고, min/max 유효성 검사가 즉시 적용되지 않던 버그를 수정함.

### 주요 변경 사항

- **기본값 초기화 로직 수정:**
  - `consulting_store`, `student_info_form`: 폼 데이터 초기화 시 `DynamicFormData.empty()` 대신 `withDefaults()`를 사용하도록 변경하여, 스키마에 정의된 기본값이 폼 생성 시 주입되도록 함.
  - `dynamic_form_builder`: 위젯이 초기화될 때 스키마의 기본값과 기존 데이터를 병합하는 로직을 추가하여 데이터 일관성을 보장함.

- **`NumberFieldWidget` 개선:**
  - **포커스 기반 유효성 검사:** 사용자가 필드에서 포커스를 잃을 때(`onFocusChange`) min/max 제약 조건을 검사하고 값을 보정하도록 변경하여, 입력 중에는 자유로운 편집을 허용하고 최종 값의 정확성을 보장함.
  - **오류 메시지 표시:** 유효성 검사 실패 시, `showErrorMessage` 오버레이를 통해 사용자에게 일관된 피드백을 제공함.
  - **컨트롤러 업데이트:** `WidgetsBinding.instance.addPostFrameCallback`을 사용하여 빌드 사이클 이후에 컨트롤러 값을 업데이트함으로써, `setState` 관련 예외 발생을 방지함.

- **`DynamicFieldBuilder` 타입 처리:**
  - 숫자 필드로 전달되는 `initialValue`가 문자열일 경우(`"2024"`) `num.tryParse`를 통해 숫자로 변환하도록 하여, `TypeError` 발생을 방지함.
