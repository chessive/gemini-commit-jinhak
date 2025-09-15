[APPLY-682] feat(payment): 결제 모듈 및 서비스에 지원 횟수 체크 로직 연동

- 새로 구현된 지원 횟수 체크 로직(`PaymentValidationService`)이 기존 결제 프로세스에 통합되도록 관련 모듈, 컨트롤러, 서비스 파일을 업데이트합니다.
- 주요 변경 내용:
  - `payment.module.ts`: 외부 API 호출을 위해 `HttpModule`을 임포트합니다.
  - `payment.controller.ts`: `processPayment` 메서드에서 `user` 객체 전체를 서비스 레이어로 전달하도록 변경하여, `isIntegrated` 플래그를 하위 로직에서 활용할 수 있도록 합니다.
  - `pay-begin.service.ts` 및 `pay-process.service.ts`: `user` 객체를 파라미터로 받도록 메서드 시그니처를 업데이트하고, `isIntegrated` 플래그를 `PaymentValidationService`로 전달합니다.
