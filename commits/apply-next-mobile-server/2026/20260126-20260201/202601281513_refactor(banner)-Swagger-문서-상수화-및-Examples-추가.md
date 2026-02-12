refactor(banner): Swagger 문서 상수화 및 Examples 추가

- `BannerController`의 인라인 Swagger 문서를 별도의 상수 파일로 분리하여 코드 가독성을 높이고 유지보수성을 개선함.
- **주요 변경 사항:**
  - **문서 분리:** `banner.swagger.constant.ts`에 API 명세, `banner.examples.constant.ts`에 응답 예시 데이터를 정의하고 컨트롤러에서 이를 참조하도록 수정함.
  - **문서화 개선:**
    - `BANNER_LIMITS` 상수를 참조하여 문서 내 제약 사항(최대 개수 등)을 동적으로 반영함.
    - 검색 레이어 배너 및 내부 운영 배너 조회 API에 대한 성공/실패(500) 응답 스키마와 상세 예시(Examples)를 추가함.
