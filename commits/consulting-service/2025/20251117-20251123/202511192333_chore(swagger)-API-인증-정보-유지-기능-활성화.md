chore(swagger): API 문서 인증 정보 유지 기능 활성화

개발 및 테스트 편의성을 향상시키기 위해 Swagger UI의 인증 정보를 브라우저 세션 간에 유지하는 기능을 활성화함.

- **변경 사항**:
  - `main.ts`의 `SwaggerModule.setup` 메서드에 `persistAuthorization: true` 옵션을 추가함.

- **개선 효과**:
  - API 문서를 새로고침하거나 다른 페이지를 방문했다 돌아와도 이전에 입력한 Bearer 토큰 등 인증 정보가 유지됨.
  - 반복적인 인증 토큰 입력 과정을 생략하여 API 테스트 및 디버깅 효율성을 높임.
