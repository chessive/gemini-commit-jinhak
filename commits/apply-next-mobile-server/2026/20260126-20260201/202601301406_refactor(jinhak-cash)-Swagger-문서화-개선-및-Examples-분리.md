refactor(jinhak-cash): Swagger 문서화 개선 및 Examples 분리

- `jinhak-cash` 모듈의 Swagger 문서를 개선하여 API 명세의 정확성을 높이고, Examples 데이터를 별도 상수 파일로 분리하여 관리 효율성을 향상시킴.
- **주요 변경 사항:**
  - **문서 분리:** `jinhak-cash.examples.constant.ts` 및 `virtual-account.examples.constant.ts`를 생성하여 방대한 예시 데이터를 분리함.
  - **정확성 검증:** 실제 DTO 구조와 불일치하던 페이지네이션 응답(`meta` 객체 제거), 필드명(`fileName` → `imgUrl`) 등을 수정함.
  - **에러 명세:** `ValidationPipe`와 비즈니스 로직 예외(`BaseException`)의 에러 응답 형식을 구분하여 명확히 문서화함.
  - **컨트롤러 개선:** `JinhakCashController`와 `VirtualAccountController`에 JSDoc 주석과 Logger를 추가하여 가독성 및 디버깅 편의성을 높임.
  - **기타:** 타 모듈 상수 및 DTO 파일의 사소한 포맷팅 수정.
