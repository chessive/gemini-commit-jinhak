refactor(error-log): 에러 로그 API 명세 개선 및 데이터 모델 확장

- 기존 ErrorLog API 명세를 Flutter 클라이언트 요구사항에 맞춰 100% 재정의 및 안정성 개선
- `ErrorLog` Prisma 스키마 필드 대폭 확장:
  - `ErrorLogID` -> `Id` 변경 및 `ServiceID` -> `ServiceId` (string)으로 타입 변경
  - `DeviceUuid`, `DeviceReadableId`, `ServiceName`, `DatabaseVersion`, `Platform`, `Environment`, `ErrorLocation`, `IsSent`, `RetryCount` 등 11개 필드 추가
  - `additionalData` 필드 타입을 `string`에서 `object`로 변경 및 저장 시 `JSON.stringify`, 조회 시 `JSON.parse` 적용
- API 응답 구조 개선:
  - 단일 및 배치 에러 로그 전송 응답에 `data` 객체, `savedAt`, `timestamp` 필드 추가
  - 배치 응답 시 `successCount`, `failedCount`, `totalCount`, `failures` (중복 ID 상세 포함) 제공으로 처리 결과 명확화
- `error-log.controller.ts`의 응답 생성 로직 변경: 서비스 계층으로부터의 응답을 새로운 API 명세에 맞춰 변환
- `error-log.service.ts`에서 `ServiceRepository` 의존성 제거 (서비스 ID 유효성 검증 로직 제외)