refactor(file): SMBTestController Swagger 문서화 및 DTO 기반 리팩토링

- `SMBTestController`의 Swagger 문서를 상수 파일로 분리하고, DTO 도입 및 로직 개선을 통해 코드 품질과 유지보수성을 향상시킴.
- **주요 변경 사항:**
  - **문서화 개선:** Swagger 설정(`smb-test.swagger.constant.ts`) 및 예시 데이터(`smb-test.examples.constant.ts`)를 상수 파일로 분리하고, Examples 드롭다운을 활성화함.
  - **DTO 도입:** `SmbConfigResponseDto`, `SmbDirectoryResponseDto` 등 7개의 DTO를 신규 생성하여 타입 안전성을 확보하고 Swagger 스키마를 자동화함.
  - **버그 수정:** `listDirectory` 메서드에서 SMB 라이브러리의 `DirectoryEntry` 타입을 올바르게 매핑하도록 수정하여 `name` 필드 누락 문제를 해결함.
  - **로깅 추가:** 각 API 엔드포인트에 `Logger`를 적용하여 요청 및 처리 결과를 추적할 수 있도록 개선함.
  - **기타:** `apply-event`, `customer` 관련 파일들의 사소한 포맷팅 및 주석 수정.
