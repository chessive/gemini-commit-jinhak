refactor(my-wonseo): Swagger 문서화 개선 및 Examples 분리

- `MyWonseoController`의 Swagger 문서를 리팩토링하여 API 명세의 정확성을 높이고, Examples 데이터를 별도 상수 파일로 분리하여 관리 효율성을 향상시킴.
- **주요 변경 사항:**
  - **문서 분리:** `my-wonseo.examples.constant.ts`를 신규 생성하여 응답 예시 데이터를 중앙 관리하고, `my-wonseo.swagger.constant.ts`를 확장하여 5개 엔드포인트 전체에 대한 상수화를 완료함.
  - **데이터 정합성:** 실제 API 응답 데이터를 기반으로 예시를 수정하고, 불필요한 필드 제거 및 필드명 정정을 통해 문서의 신뢰도를 확보함.
  - **컨트롤러 개선:**
    - `Logger`를 도입하여 요청/응답 로깅을 강화함.
    - `deleteApplication` 메서드에 `ParseIntPipe`를 적용하여 파라미터 타입 안전성을 확보함.
    - JSDoc 주석을 보강하여 코드 가독성을 높임.
  - **기타:** 기존 비표준 패턴의 `swagger-examples.constant.ts` 삭제 및 리포지토리 JSDoc 오류 수정.
