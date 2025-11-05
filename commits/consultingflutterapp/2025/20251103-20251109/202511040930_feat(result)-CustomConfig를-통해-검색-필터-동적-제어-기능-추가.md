feat(result): CustomConfig를 통해 검색 필터 동적 제어 기능 추가

결과 화면의 `SearchModule`에 표시되는 8개의 검색 필터(전형, 계열, 대학 등)를 CustomConfig를 통해 서비스별로 동적으로 표시하거나 숨길 수 있는 기능을 추가함.

### 주요 변경 사항

- **`result_config.dart`:**
  - `ResultConfigSearchBoxFilters` 클래스를 신규로 추가하여, 8개 필터(showGunDropDown, showSelTypeDropDown 등)의 표시 여부를 관리하는 boolean 속성을 정의함.
  - 모든 속성의 기본값을 `true`로 설정하여 기존 서비스의 동작에 영향을 주지 않도록 하위 호환성을 보장함.
  - `ResultConfigSearchBox` 클래스에 `filters` 속성을 추가하여 전체 설정 계층 구조에 통합함.

- **`SearchModule.dart`:**
  - `GlobalConfigManager`를 통해 `result.searchBox.filters` 설정을 조회함.
  - 각 필터 컴포넌트를 `if (filters.show...)` 조건문으로 감싸, CustomConfig 설정값에 따라 조건부로 렌더링되도록 수정함.
  - `GunDropDown`의 경우, 기존의 `isVisibleGunDropDown` 로직과 AND 조건으로 결합하여 두 조건을 모두 만족할 때만 표시되도록 처리함.

이 변경을 통해 서비스별 요구사항에 맞춰 결과 화면의 검색 UI를 유연하게 커스터마이징할 수 있는 기반을 마련함.
