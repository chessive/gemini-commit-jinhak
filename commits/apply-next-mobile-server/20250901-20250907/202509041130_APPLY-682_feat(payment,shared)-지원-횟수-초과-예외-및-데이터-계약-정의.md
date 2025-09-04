[APPLY-682] feat(payment, shared): 지원 횟수 초과 예외 및 데이터 계약 정의

- 결제 전 지원 횟수 초과를 처리하기 위한 기반 요소를 정의합니다.
- 주요 추가 사항:
  - `ErrorCode` Enum에 `PAYMENT_APPLICATION_COUNT_EXCEEDED`를 추가하여, 지원 횟수 초과에 대한 명확한 에러 식별자를 제공합니다.
  - `PaymentApplicationCountExceededException` 커스텀 예외 클래스를 생성하여, 일관된 에러 처리 및 리다이렉션을 지원합니다.
  - 외부 EAI 서버와 통신하기 위한 `CheckApplyCountRequest/Response` 인터페이스를 정의하여 타입 안정성을 확보합니다.
