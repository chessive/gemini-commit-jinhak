feat(result): CustomConfig를 통해 검색 필터 동적 제어 기능 추가

결과 화면의 검색 모듈(`SearchModule`)에 `CustomConfig` 설정을 통해 동적으로 제어되는 커스텀 필터 기능을 추가함. 이를 통해 앱 재배포 없이 서버 설정만으로 필터를 추가하고 정렬할 수 있는 유연성을 확보함.

### 주요 변경 사항

- **`CustomConfig` 모델 확장 (`result_config.dart`):**
  - `ResultConfigSearchBox`에 `customFilter` 속성을 추가하여, `enabled`, `columnName`, `label`, `position` 값을 `CustomConfig`으로부터 받을 수 있도록 `ResultConfigSearchBoxCustomFilter` 클래스를 신설함.

- **동적 필터 위젯 (`CustomFilterDropDown.dart`):**
  - `CustomConfig`에 정의된 `columnName`을 기준으로 데이터에서 고유 값을 추출하여 드롭다운 옵션을 동적으로 생성하는 `CustomFilterDropDown` 위젯을 구현함.
  - 필터링된 데이터가 없을 경우 위젯이 표시되지 않도록 처리함.

- **`SearchModule` 레이아웃 재구성 (`SearchModule.dart`):**
  - 기존의 정적 `ListView` 구조를 `position` 값에 따라 동적으로 필터를 정렬하는 방식으로 변경함.
  - 모든 필터 위젯을 `MapEntry<int, Widget>` 리스트로 관리하고, `customFilter`가 활성화된 경우 리스트에 추가한 후 `position` 기준으로 정렬하여 UI에 반영함.

- **`SearchStore` 필터링 로직 강화 (`search_store.dart`):**
  - **단방향 필터링:** `_customFilterValue` 상태를 추가하고, `changeFilterData` 메서드에 커스텀 필터 값을 적용하는 로직을 구현함.
  - **양방향 연동:** `getGunList`, `getSelTypeList` 등 기존 필터의 옵션을 생성하는 메서드에도 커스텀 필터 값을 반영하여, 한 필터의 선택이 다른 필터의 옵션에 영향을 주도록 양방향 연동을 구현함.
  - 필터 초기화 시 `resetCustomFilter`가 호출되도록 `clearSearchFilter` 메서드를 수정함.
