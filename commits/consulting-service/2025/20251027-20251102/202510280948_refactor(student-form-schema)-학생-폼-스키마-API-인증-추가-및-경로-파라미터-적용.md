refactor(student-form-schema): 학생 폼 스키마 API 인증 추가 및 경로 파라미터 적용

- `GET /student-form-schema` 엔드포인트에 `SerialGuard`를 적용하여 시리얼 번호 기반 인증 추가
- `serviceId`를 쿼리 파라미터(`@Query`)에서 경로 파라미터(`@Param`)로 변경 (`/student-form-schema/:serviceId`)
- `StudentFormSchemaModule`에 `AuthModule`을 임포트하여 `SerialGuard` 의존성 해결
- Swagger 문서에 `ApiBearerAuth`를 추가하여 인증 요구사항 명시
