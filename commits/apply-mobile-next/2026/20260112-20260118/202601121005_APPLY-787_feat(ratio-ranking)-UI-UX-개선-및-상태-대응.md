[APPLY-787] feat(ratio-ranking): 경쟁률 랭킹 UI/UX 개선 및 ServiceInactive 상태 대응

- 백엔드 폴백 체인 시스템 리팩토링에 맞춰 프론트엔드 UI/UX를 전면 개선함.
- **주요 변경 사항**:
  - `ServiceInactive` displayMode 추가 및 처리: 서비스 비활성 기간에는 컴포넌트를 숨기고 불필요한 광고 API 호출을 방지함.
  - 서버 제공 `isCurrentYear` 필드 활용: 클라이언트 시간 의존성을 제거하고 서버 기준으로 '올해/작년' 타이틀을 정확히 표시함.
  - UI 통일성 개선: 모든 displayMode에서 경쟁률 수치 대신 '확인' 버튼으로 노출 방식을 통일함.
  - `MajorBased` 모드 렌더링 최적화: 대학명, 전공명, 전형명을 모두 표시하도록 분기 처리 개선.
  - 불필요한 `isClickBasedMode` prop 제거 및 `displayMode` 기반의 직접적인 렌더링 제어로 코드 간소화.
  - 툴팁 메시지 수정 ("소개해요" → "모았어요") 및 ServiceInactive 전용 메시지 추가.
