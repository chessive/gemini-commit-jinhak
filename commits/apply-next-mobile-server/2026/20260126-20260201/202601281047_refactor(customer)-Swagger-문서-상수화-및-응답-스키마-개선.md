refactor(customer): Swagger 문서 상수화 및 응답 스키마 개선

- Customer 모듈(apply-category, apply-event, faq-notice, qa-board)의 방대한 Swagger 문서를 컨트롤러에서 분리하여 상수 파일로 중앙화하고, 정확한 응답 스키마와 예시 데이터를 적용함.
- **주요 변경 사항:**
  - **문서 분리:** 각 도메인별 Swagger 설정(`*.swagger.constant.ts`)과 예시 데이터(`*.examples.constant.ts`)를 상수 파일로 분리하여 컨트롤러 가독성 향상.
  - **스키마 개선:** `ApplyCategoryItemDto` 등 신규 DTO를 정의하고, `scholarShip`, `useHsb` 등 기존 DTO의 부정확한 필드 설명을 수정하여 문서 정확성 확보.
  - **예시 데이터 강화:** 모든 엔드포인트에 대해 성공/실패 케이스별 상세한 `examples`를 추가하여 API 사용성 개선.
  - **표준화:** 공통 에러 응답(500) 및 인증 관련 문서를 일관된 형식으로 통일.
