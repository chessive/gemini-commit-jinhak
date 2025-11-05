fix(scoring): CustomKeyboard 가로 overflow 해결 및 UI 개선

태블릿/데스크톱의 가로 모드에서 성적 입력 시 CustomKeyboard가 화면을 벗어나는 overflow 문제를 해결하고, UI 일관성을 개선함.

### 주요 변경 사항

- **Overflow 해결 (핵심):**
  - `calculate_screen`: 키보드 및 폼 너비 계산 기준을 `screenWidth`에서 `whiteBoxWidth`로 통일함.
  - 폼 너비 계산 시 좌/우 마진(`formMarginLeft/Right`)을 모두 차감하여 정확한 가용 너비를 계산하도록 수정.

- **UI 개선:**
  - `calculate_constants`: 키보드 관련 비율(`keyboardRatio*`, `keyboardHeightRatio`)을 축소하여 컴팩트하게 만들고, 버튼 간격(`buttonGap`), 내부 패딩(`keyboardPadding`) 등 새로운 상수를 추가하여 레이아웃을 중앙에서 관리하도록 개선.
  - `custom_keyboard_box`: 이전/다음 버튼의 너비와 위치 계산 방식을 다이얼 버튼과 동일하게 변경하여 시각적 정렬을 맞춤.
  - `custom_keyboard`: 버튼 레이아웃을 명시적인 `buttonGap` 기반으로 재구성하여 일관된 간격을 보장함.

- **코드 품질:**
  - 레이아웃 계산에 사용되던 매직 넘버(Magic number)를 `CalculateScreenConstants`의 상수로 대체하여 유지보수성을 향상시킴.
