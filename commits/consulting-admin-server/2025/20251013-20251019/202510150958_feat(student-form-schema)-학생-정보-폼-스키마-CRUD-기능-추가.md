feat(student-form-schema): 학생 정보 폼 스키마 CRUD 기능 추가

- `prisma.schema` 파일에 `StudentFormSchema` 모델 추가
  - 서비스별, 버전별 동적 폼 스키마(JSON) 저장을 위한 데이터 모델 정의
- 학생 정보 폼 스키마 관리를 위한 RESTful API 엔드포인트 추가 (`StudentFormSchemaController`)
  - `POST /`: 신규 스키마 생성 (버전 자동 증가)
  - `GET /service/:serviceId`: 서비스별 스키마 목록 조회
  - `GET /:schemaId`: 특정 스키마 단건 조회
  - `DELETE /:schemaId`: 스키마 삭제
- `StudentFormSchema` 모듈, 서비스, 레포지토리 구현
  - `Controller`: API 요청/응답 처리 및 Swagger 문서화 (DTO, 예제 포함)
  - `Service`: 스키마 생성, 조회, 삭제 비즈니스 로직 및 예외 처리 담당
  - `Repository`: Prisma를 사용한 데이터베이스 CRUD 로직 구현
- `isPrismaForeignKeyConstraintError` 유틸리티 함수 추가로 Prisma 오류 처리 개선
- `app.module.ts`에 `StudentFormSchemaModule`을 통합하여 기능 활성화
- 기본 `AppController`, `AppService` 파일 제거
