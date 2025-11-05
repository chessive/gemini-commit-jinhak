refactor(search): SearchStore 로직 리팩토링 및 코드 품질 개선

`search_store.dart` 파일의 코드 품질, 유지보수성, 확장성을 향상시키기 위해 대규모 리팩토링을 진행함.

### 주요 변경 사항

- **중복 코드 제거 (DRY 원칙 적용):**
  - 5개의 필터 옵션 생성 메서드(`getGunList`, `getSelTypeList` 등)에 반복되던 로직을 3개의 private 헬퍼 메서드(`_getApplyMajorList`, `_applyCustomFilter`, `_createFilterReturnValue`)로 추출하여 통합함.
  - 이로 인해 약 200줄의 중복 코드가 제거되었고, 필터 로직 변경 시 수정 포인트가 5곳에서 1곳으로 줄어듦.

- **`changeFilterData` 메서드 분리 (단일 책임 원칙 적용):**
  - 120줄에 달하던 거대 메서드를 4개의 작은 헬퍼 메서드(`_resetDependentFilters`, `_applyBasicFilters`, `_applyCheckboxFilter`, `_updateUIState`)로 분리하여 각 메서드가 하나의 명확한 책임을 갖도록 구조를 개선함.
  - 메서드 복잡도가 크게 감소하고 가독성이 향상됨.

- **타입 안전성 강화:**
  - `var` 키워드로 선언되었던 변수들에 `String?`, `List<String>`, `int` 등 명시적인 타입을 지정하여 런타임 오류 가능성을 줄이고 코드 안정성을 높임.

- **코드 스타일 및 컨벤션 개선:**
  - `ChangeCardData`와 같이 대문자로 시작하던 메서드명을 `changeCardData` 등 Dart 네이밍 컨벤션에 맞게 수정함.
  - `[false, false, ...]`와 같이 반복되던 매직 넘버(Magic number)를 `CHECKBOX_COUNT`, `DEFAULT_CHECKBOX_STATE` 등의 상수로 대체함.
  - 불필요한 주석 처리 코드를 삭제하여 코드 가독성을 높임.
