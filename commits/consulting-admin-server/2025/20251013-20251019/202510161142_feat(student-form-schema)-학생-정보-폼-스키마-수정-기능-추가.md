feat(student-form-schema): 학생 정보 폼 스키마 수정 기능 추가

- `StudentFormSchemaController`에 `PATCH /:schemaId` 엔드포인트 추가
  - 스키마 JSON 또는 활성화 여부를 수정하는 API를 제공합니다.
  - `ApiBody`, `ApiOkResponse`, `ApiBadRequestResponse`, `ApiNotFoundResponse` 등 Swagger 문서화를 포함합니다.

- `StudentFormSchemaUpdateDto` 추가
  - `schemaJson`, `isActive`, `updatedBy` 필드를 선택적으로 받아 유효성을 검사합니다.

- `StudentFormSchemaService` 및 `StudentFormSchemaRepository`에 `updateSchema` 메소드 추가
  - **Service**: `ensureSchemaExists`로 스키마 존재 여부를 확인하고, `ensureUpdatePayload`로 요청 본문에 수정할 값이 있는지 검증한 후 Repository를 호출합니다.
  - **Repository**: `schemaJson`을 파싱하여 기존의 `version`, `serviceId`, `formTitle` 정보를 보존하면서 업데이트하는 로직을 구현했습니다.

- `student-form-schema/dtos/index.ts`에 `StudentFormSchemaUpdateDto` export 추가
