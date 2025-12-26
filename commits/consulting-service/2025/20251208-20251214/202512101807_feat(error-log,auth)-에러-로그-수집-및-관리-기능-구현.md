feat(error-log, auth): 에러 로그 수집 및 관리 기능 구현

- Prisma 스키마에 `ErrorLog` 모델을 추가하여 클라이언트 에러 로그 저장 기반 마련
  - `ErrorLogID`(UUID), `ServiceID`, `Timestamp`, `ErrorType`, `ErrorMessage`, `StackTrace` 등 다양한 에러 정보를 포함
  - `Service` 모델과의 관계 설정 및 인덱스 추가
- `error-log` 모듈 (컨트롤러, 서비스, 레포지토리) 신설
  - `ErrorLogController`: 단일 및 배치 에러 로그 전송 API 엔드포인트 구현
    - 단일 로그 전송 시 멱등성 보장을 위해 중복 ID 처리 (200 OK 응답)
    - 배치 로그 전송 시 부분 성공을 위해 207 Multi-Status 응답 처리
  - `ErrorLogService`: 에러 로그 생성 및 서비스 ID 유효성 검증 비즈니스 로직 구현
  - `ErrorLogRepository`: Prisma를 활용한 `ErrorLog` 데이터베이스 CRUD (단일, 배치 생성, 중복 확인 등) 구현
- `auth` 모듈 내 `ServiceRepository` 분리 및 재활용
  - `AuthModule`에 `ServiceRepository`를 추가하여 서비스 존재 여부 확인 로직을 공통으로 사용
- `app.module.ts`에 `ErrorLogModule`을 임포트하여 기능 활성화
- 신규 파일 추가: `src/features/error-log` 디렉토리 전체 및 `src/features/auth/repositories/service.repository.ts`