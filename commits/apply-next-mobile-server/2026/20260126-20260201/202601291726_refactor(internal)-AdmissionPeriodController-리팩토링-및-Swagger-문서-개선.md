refactor(internal): AdmissionPeriodController 리팩토링 및 Swagger 문서 개선

- `AdmissionPeriodController`의 코드 구조를 개선하여 성능과 유지보수성을 높이고, Swagger 문서를 보완하여 API 명세를 명확히 함.
- **주요 변경 사항:**
  - **리팩토링:** `publishAdmissionPeriods` 메서드에서 불필요한 DB 중복 조회를 제거하고, 에러 처리 방식을 표준화(HTTP 500 예외)하여 안정성을 확보함.
  - **문서화 개선:** GET 엔드포인트(`current`, `file-info`)에 대한 성공/실패 예시(Examples)를 추가하고, `Home` 태그를 영문으로 통일함.
  - **인터페이스 확장:** `FileWriteResult`에 `periodsCount`, `year` 필드를 추가하여 서비스 간 데이터 전달 효율을 높임.
  - **테스트 보완:** 리팩토링된 로직에 맞춰 컨트롤러 테스트 코드를 전면 재작성하고 예외 케이스 검증을 강화함.
