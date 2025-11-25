[APPLY-654] feat(clarity): 커스텀 태그 연동으로 히트맵 및 스크린샷 정확도 개선

- Clarity 히트맵/스크린샷이 메인 화면 대신 오버레이/다이얼로그 화면만 캡처하는 문제를 해결하기 위해 커스텀 태그 시스템을 구축함.
- **주요 개선 사항**:
  - `ClarityProvider`를 확장하여 `usePathname` 기반 `page_state` 태그를 자동 설정하고, `isInitialized` 상태 및 에러 핸들링을 강화함.
  - `dialog.store.ts` 및 `modal-alert.store.ts`에 태그 설정 로직을 연동하여 다이얼로그 열림/닫힘에 따라 `page_type` (dialog/content) 및 `dialog_name`을 동적으로 변경함.
  - `clarity-tags.ts` 유틸리티를 신규 생성하여 Clarity 태그 관련 로직을 중앙 집중화하고 코드 중복을 제거함.
  - `global.d.ts`에 `window.clarity` 타입 선언을 추가하여 타입 안전성을 확보함.
  - 개발 환경 디버깅 로그 및 동적 라우트 세그먼트 처리 로직을 추가하여 개발 편의성을 높임.
- 이를 통해 Clarity 대시보드에서 페이지와 다이얼로그 상태를 명확하게 구분하여 더 정확한 사용자 행동 분석이 가능함.
