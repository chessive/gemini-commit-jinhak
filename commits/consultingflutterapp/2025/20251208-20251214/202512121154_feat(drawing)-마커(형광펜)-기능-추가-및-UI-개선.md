feat(drawing): 마커(형광펜) 기능 추가 및 UI 개선

필기 기능에 반투명한 마커(형광펜) 모드를 추가하고, 설정 UI를 컴팩트하게 개선함.

### 주요 변경 사항

- **마커 기능 구현 (`ConsultingPainter`):**
  - `DrawingMode.marker` 모드 추가 (형광펜 효과).
  - `saveLayer` 기법을 사용하여 마커가 겹칠 때 투명도가 누적되지 않고 유지되도록 구현.
  - 스트로크 바운딩 박스 계산(`_calculateStrokeBounds`)을 통해 렌더링 성능 최적화.

- **상태 관리 개선 (`DevelopStore`):**
  - 펜(`brush`)과 마커(`marker`) 모드 상태 관리 추가.
  - 모드별 선 두께(`brushStrokeWidth`, `markerStrokeWidth`) 독립적 관리.
  - 디버그 로그에 `kDebugMode` 체크 추가.

- **UI/UX 개선:**
  - 설정 패널을 220px 너비의 컴팩트한 디자인으로 재설계.
  - 직관적인 아이콘 기반의 모드 선택(펜/형광펜), 두께, 색상 버튼 적용.
  - 패널 숨기기 버튼 추가로 편의성 향상.

- **코드 구조 개선:**
  - `_drawStroke` 메서드로 그리기 로직 공통화.
  - `PaintConstants`에 UI 색상 및 마커 설정 상수 통합.
