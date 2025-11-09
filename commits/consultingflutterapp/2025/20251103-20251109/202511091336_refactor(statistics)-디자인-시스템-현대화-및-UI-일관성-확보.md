refactor(statistics): 통계 화면 디자인 시스템 현대화 및 UI 일관성 확보

통계 화면(`StatisticsScreen`) 전반의 UI 일관성을 확보하고 코드 품질을 향상시키기 위해, 중앙화된 디자인 시스템(`ChartColorPalette`)을 도입하고 이를 각 통계 위젯에 적용하는 리팩토링을 진행함.

### 주요 변경 사항

- **1. 중앙 디자인 시스템 도입 (`theme.dart`):**
  - `ChartColorPalette` 클래스를 신설하여, 기존에 각 위젯에 하드코딩되어 있던 색상들을 `ResultScreen`의 색상 시스템과 통합함.
  - 차트 순위별 색상, 배경/텍스트 색상, UI 요소별 강조 색상 등을 중앙에서 관리하여 앱 전체의 디자인 일관성을 확보함.
  - `colorScheme` 의존성을 제거하고 고정 색상값을 직접 반환하도록 하여 성능을 최적화함.

- **2. 통계 위젯 리팩토링 (`daily_statistics_widget`, `major_statistics_widget` 등):**
  - 기존의 `Theme.of(context).colorScheme` 또는 하드코딩된 색상을 모두 새로운 `ChartColorPalette`를 사용하도록 변경함.
  - `didChangeDependencies` 생명주기에서 `ChartColorPalette`를 안전하게 초기화하도록 수정하여, `Theme` 의존성 관련 런타임 오류 가능성을 제거함.

- **3. UI 일관성 강화:**
  - `StatisticsScreen`의 배경색, `QuickDateFilterButtons`의 선택/기본 색상, `StatisticsKpiCard`의 아이콘별 색상 등을 모두 `ChartColorPalette`의 색상 시스템에 맞춰 통일함.
  - `ElevatedButton`의 `elevation`을 제거하고 패딩을 조정하는 등, 앱의 다른 부분과 일관된 버튼 스타일을 적용함.

### 기대 효과

- **디자인 일관성 확보:** 통계 화면의 모든 요소가 앱의 다른 부분과 동일한 디자인 언어를 사용하여 사용자에게 일관되고 안정적인 시각적 경험을 제공함.
- **유지보수성 증대:** 중앙화된 `ChartColorPalette`를 통해 향후 색상 변경, 다크 모드 지원 등 디자인 시스템 관련 수정이 매우 용이해짐.
- **코드 품질 향상:** 하드코딩된 색상을 제거하고, 생명주기를 고려한 안전한 초기화 로직을 적용하여 프로젝트의 전반적인 코드 품질을 높임.
- **성능 최적화:** 색상 값을 캐싱하여 불필요한 계산을 줄이고 렌더링 성능을 향상시킴.
