[APPLY-704] feat(customer): 메인 화면 고정 공지사항 조회 API 구현

- 메인 화면에 노출될 고정 공지사항 목록을 조회하는 `GET /customer/notices/pinned` API 엔드포인트를 신규 추가합니다.
- `FaqNoticeRepository`에 `getPinnedNoticesData` 메서드를 추가하여, `MainOrder`가 1로 설정된 공지사항만 필터링하는 TypeORM 쿼리를 구현합니다.
- `FaqNoticeService`에 `findPinnedNotices` 비즈니스 로직을 추가하고, 컨트롤러에서는 조회된 데이터를 `GetNoticesResponseDto` 형식으로 변환하여 반환합니다.
- 기존 공지사항 목록 API와 달리, 이 API는 인증 없이 호출할 수 있도록 `@Public()` 데코레이터를 적용합니다.
