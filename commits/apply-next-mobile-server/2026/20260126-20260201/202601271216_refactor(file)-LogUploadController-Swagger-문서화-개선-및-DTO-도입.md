refactor(file): LogUploadController Swagger 문서화 개선 및 DTO 도입

- `LogUploadController`의 Swagger 문서를 상수 파일로 분리하고, DTO 클래스 기반 자동 스키마 생성 방식으로 리팩토링하여 유지보수성과 타입 안전성을 향상시킴.
- **주요 변경 사항:**
  - **DTO 도입:** 응답 데이터 구조를 정의하는 7개 DTO 클래스(`LogUploadResponseDto`, `HealthCheckResponseDto` 등)를 신규 생성하여 Swagger 스키마를 자동화함.
  - **문서 분리:** Swagger 설정 상수를 `log-upload.swagger.constant.ts`와 `log-upload.examples.constant.ts`로 분리하여 컨트롤러 코드의 가독성을 높임.
  - **컨트롤러 개선:** `@ApiOkResponse` 데코레이터에 DTO 타입과 예시 데이터를 연결하여 문서의 정확성을 확보하고, 반환 타입을 명시적 DTO로 변경함.
  - **헬스체크 보완:** `LogFileService`에 `checkLogDirectoryExists` 메서드를 추가하여 로그 디렉토리 접근성 점검 로직을 강화함.
