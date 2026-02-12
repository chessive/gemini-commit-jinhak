refactor(auth): Swagger 문서 상수화 및 Examples 추가

- `AuthController`의 인라인 Swagger 문서를 별도의 상수 파일로 분리하여 코드 가독성을 높이고 유지보수성을 개선함.
- **주요 변경 사항:**
  - **문서 분리:** `auth.swagger.constant.ts`에 API 명세, `auth.examples.constant.ts`에 응답 예시 데이터를 정의하고 컨트롤러에서 이를 참조하도록 수정함.
  - **문서화 개선:**
    - 로그인, 토큰 갱신, 로그아웃, 원격 로그인 등 5개 엔드포인트에 대한 상세한 설명과 인증 방식을 명시함.
    - 성공/실패 시나리오별 Examples 드롭다운을 활성화하여 API 사용성을 개선함.
