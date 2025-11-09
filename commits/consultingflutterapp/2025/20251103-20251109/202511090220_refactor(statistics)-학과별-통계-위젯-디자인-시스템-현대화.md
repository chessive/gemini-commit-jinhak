refactor(statistics): 학과별 통계 위젯, 디자인 시스템 현대화 적용

`MajorStatisticsWidget`의 UI를 `DailyStatisticWidget`과 동일한 Material 3 기반 디자인 시스템에 맞춰 전면 리팩토링하여, 통계 화면 전체의 시각적 일관성을 확보하고 코드 품질을 개선함.

### 주요 변경 사항

- **1. 디자인 시스템 통합 및 하드코딩 제거:**
  - **색상 시스템 통일:** 기존에 하드코딩되어 있던 모든 색상(차트, 텍스트, 보더 등)을 `ChartColorPalette`와 `Theme.of(context).colorScheme`을 사용하도록 변경하여, `DailyStatisticWidget`과 완벽한 색상 일관성을 구현함.
  - **여백 및 카드 스타일 적용:** `Spacing` 상수를 사용하여 8px 그리드 시스템에 맞는 일관된 여백을 적용하고, `CardStyles.cardOutlined`를 통해 카드 스타일을 통일함.
  - **텍스트 스타일 개선:** 하드코딩된 `TextStyle`을 `Theme.of(context).textTheme`으로 대체하여, 앱 전체 테마와 일관된 타이포그래피를 적용함.

- **2. 코드 품질 및 유지보수성 향상:**
  - **`ChartDimensions` 상수 도입:** 차트 높이, Y축 버퍼 등 차트 레이아웃 관련 `magic number`를 `ChartDimensions` 상수로 분리하여 코드의 가독성과 유지보수성을 높임.
  - **안전한 초기화:** `didChangeDependencies` 생명주기를 활용하여 `Theme`에 의존하는 `ChartColorPalette`를 안전하게 초기화하도록 수정함.
  - **Null Safety 강화:** `_colorPalette` 접근 시 `??` 연산자를 사용하여 fallback 값을 제공함으로써 `!` 연산자 사용을 최소화하고 런타임 안정성을 강화함.

- **3. UI 일관성 및 디테일 개선:**
  - **차트 디테일 통일:** 데이터 라벨 스타일, 막대 `borderRadius`, 0값 처리 로직(`Colors.transparent`) 등을 `DailyStatisticWidget`과 동일하게 맞춰 시각적 통일성을 완성함.
  - **전체 레이아웃 구조 개선:** `statistics_screen.dart`의 전체적인 레이아웃 구조를 개선하여, 통계 화면의 모든 탭이 일관된 컨테이너와 타이틀 스타일을 갖도록 수정함.

### 기대 효과

- **시각적 일관성 확보:** 통계 화면 내 모든 위젯이 통일된 디자인 언어를 사용하여 사용자에게 일관되고 안정적인 시각적 경험을 제공함.
- **유지보수성 증대:** 중앙화된 디자인 시스템(`ChartColorPalette`, `Spacing`, `CardStyles`)을 통해 향후 디자인 변경 및 다크 모드 지원 등이 용이해짐.
- **코드 품질 향상:** 하드코딩과 `magic number`를 제거하고, Flutter 생명주기에 맞는 안전한 코드를 작성하여 프로젝트의 전반적인 코드 품질을 높임.
