refactor(payment): Swagger 문서 상수화 및 Examples 파일 구조 개선

- Payment 모듈의 Swagger 문서화 방식을 프로젝트 표준 패턴으로 리팩토링하여 유지보수성과 가독성을 향상시킴.
- **주요 변경 사항:**
  - **문서화 구조 표준화:**
    - 기존 `swagger-examples.constant.ts`를 삭제하고 도메인 명시적 파일인 `payment.examples.constant.ts`로 교체함.
    - 컨트롤러 내부에 산재해 있던 Swagger 설정값들을 `payment.swagger.constant.ts` 상수로 분리함.
  - **데이터 관리 방식 개선:**
    - 여러 개로 분산되어 있던 Example 객체들을 `PAYMENT_EXAMPLES` 단일 객체로 통합하고 `as const`를 적용하여 타입 안전성을 강화함.
  - **컨트롤러 최적화:**
    - `PaymentController` 및 `PaymentTestController`의 가독성을 위해 복잡한 Swagger 데코레이터 선언부를 외부 상수로 대체함.
    - 관련 상수의 import 및 export 경로(`constants/index.ts`)를 최신 구조에 맞게 업데이트함.