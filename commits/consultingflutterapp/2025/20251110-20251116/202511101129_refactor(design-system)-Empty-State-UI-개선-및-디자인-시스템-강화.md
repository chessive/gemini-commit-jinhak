refactor(design-system): Empty State UI 개선 및 디자인 시스템 강화

프로젝트 전반의 디자인 일관성과 코드 품질을 높이기 위해 `ReferenceScreen`의 Empty State UI를 개선하고, `ChartColorPalette`를 싱글톤으로 리팩토링하며, `AppTypography` 상수를 도입함.

### 주요 변경 사항

- **Empty State UI 개선 (`reference_screen.dart`):**
  - **아이콘 변경**: 부적절한 `folder_open` 아이콘을 Material Design 표준인 `inbox` 아이콘으로 교체.
  - **메시지 개선**: "등록된 자료가 없습니다"라는 단일 메시지를, 원인과 해결 방법을 안내하는 2단계 메시지로 변경하여 사용자 경험을 향상시킴.
  - **불필요한 요소 제거**: 실제 기능이 없는 '새로고침' 버튼을 제거하여 사용자 혼란을 방지함.
  - **접근성 향상**: `Semantics` 위젯을 추가하여 스크린 리더 사용자를 위한 음성 안내를 제공.

- **`ChartColorPalette` 싱글톤 리팩토링 (`theme.dart` 및 7개 파일):**
  - `ChartColorPalette`를 싱글톤 패턴으로 변경하여 앱 전역에서 단일 인스턴스만 사용하도록 하여 메모리 효율성을 높임.
  - 프로젝트 내 7개 파일의 `ChartColorPalette()` 생성자 호출을 `ChartColorPalette.instance`로 일괄 수정.

- **`AppTypography` 상수 도입 (`typography.dart` 신규 생성):**
  - 아이콘 크기, 폰트 크기, 폰트 두께, 행간 등을 관리하는 `AppTypography` 클래스를 새로 추가함.
  - `NoFileCard` 위젯 내 하드코딩된 타이포그래피 관련 값들을 모두 상수로 대체하여 일관성을 확보하고 유지보수성을 높임.

### 개선 효과

- **디자인 일관성 강화**: 색상, 여백, 타이포그래피 전반에 걸쳐 중앙화된 디자인 시스템을 적용.
- **코드 품질 향상**: 하드코딩된 매직 넘버를 제거하고, 싱글톤 패턴을 적용하여 코드의 안정성과 효율성을 높임.
- **사용자 경험(UX) 개선**: 명확하고 유용한 Empty State UI를 통해 사용자에게 더 나은 피드백을 제공.
- **접근성 향상**: 스크린 리더 지원을 통해 앱의 접근성을 개선.
