refactor(my-page): Swagger 문서화 개선 및 Examples 분리

- `MyPageController`의 Swagger 문서를 리팩토링하여 API 명세의 정확성을 높이고, Examples 데이터를 별도 상수 파일로 분리하여 관리 효율성을 향상시킴.
- **주요 변경 사항:**
  - **문서 분리:** `my-page.examples.constant.ts` 및 `my-page.swagger.constant.ts`를 생성하여 방대한 Swagger 설정을 컨트롤러에서 분리함.
  - **데이터 정합성:** 실제 API 응답과 일치하도록 Example 데이터의 필드 타입(숫자형 `univType`) 및 값 포맷(ISO 날짜)을 수정함.
  - **컨트롤러 개선:** JSDoc 주석과 Logger를 추가하여 코드 가독성 및 디버깅 편의성을 높임.
  - **응답 명세:** `MyPageSummaryResponseDto`에 대한 상세한 응답 예시(활성 사용자, 신규 사용자 등)를 제공하여 프론트엔드 연동성을 개선함.
