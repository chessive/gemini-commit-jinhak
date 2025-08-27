[APPLY-663] fix(analytics, sync): 모바일 메인 띠배너(MOA) 이벤트 추적 기능 추가

- GTM 이벤트 상수 추가
  - `events.constant.ts`에 `MOA_BANNER` impression/click 이벤트 및 설명 추가
  - 전체 커스텀 이벤트 목록(`ALL_GTM_CUSTOM_EVENTS`)에 신규 이벤트 포함

- 배너 이벤트 매핑 확장
  - `mapping.utils.ts`의 `BANNER_EVENTS` 배열에 `moa_banner_*` 이벤트 추가
  - 배너 이벤트 분류 로직이 MOA 배너를 인식하도록 수정
