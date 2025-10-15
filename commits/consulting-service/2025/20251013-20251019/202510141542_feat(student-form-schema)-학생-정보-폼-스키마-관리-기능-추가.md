feat(student-form-schema): 학생 정보 폼 스키마 동적 관리 기능 추가

- `prisma.schema`에 `StudentFormSchema` 모델 추가
  - 서비스별, 버전별 폼 스키마(JSON)를 저장하여 동적 폼 생성 기반 마련
  - `ServiceId`와 `Version`에 대한 복합 유니크 키 및 인덱스 설정
- `GET /student-form-schema` API 엔드포인트 추가
  - `serviceId`를 쿼리로 받아 해당 서비스의 활성화된 최신 폼 스키마를 조회
- `StudentFormSchema` 모듈, 컨트롤러, 서비스, 레포지토리 구현
  - `Controller`: API 요청 처리 및 Swagger 문서화
  - `Service`: 스키마 조회 비즈니스 로직, `SchemaJson` 파싱 및 예외 처리 담당
  - `Repository`: Prisma를 사용하여 데이터베이스 조회 로직 구현
- `app.module.ts`에 `StudentFormSchemaModule`을 통합하여 기능 활성화
