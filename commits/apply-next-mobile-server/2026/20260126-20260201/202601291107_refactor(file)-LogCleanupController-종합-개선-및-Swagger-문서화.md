refactor(file): LogCleanupController 종합 개선 및 Swagger 문서화

- `LogCleanupController`의 Swagger 문서를 상수 파일로 분리하고, DTO 도입 및 로직 개선을 통해 코드 품질과 안정성을 향상시킴.
- **주요 변경 사항:**
  - **문서화 개선:** Swagger 설정 및 예시 데이터를 상수 파일(`*.constant.ts`)로 분리하고, DTO 기반 자동 스키마 생성을 적용하여 유지보수성을 높임.
  - **DTO 도입:** `LogCleanupOptionsDto`, `LogCleanupResultDto` 등 10여 개의 DTO를 신규 생성하여 타입 안전성을 확보함.
  - **버그 수정:** `ParseBoolPipe` 사용 시 Optional 파라미터가 누락되면 400 에러가 발생하는 문제를 `DefaultValuePipe`를 적용하여 해결함.
  - **헬스체크 강화:** 단순 응답만 하던 `healthCheck` 엔드포인트에 실제 로그 디렉토리 접근 권한을 확인하는 로직(`checkLogDirectoryExists`)을 추가함.
  - **용어 수정:** API 문서 및 DTO에서 '나이(age)'라는 표현을 '경과 일수(ageInDays)'로 명확하게 수정함.
