refactor(smart-ratio): 스마트경쟁률 모듈 안정성 및 가독성 개선

- `smart-ratio` 모듈의 서비스 및 리포지토리 계층에 `try-catch` 구문과 `NotFoundException`을 적용하여 오류 처리 로직을 강화함
- 리포지토리에서 SQL 쿼리 조건을 동적으로 생성하는 로직을 별도 메서드로 분리하여 가독성과 유지보수성을 향상
- 서비스의 파라미터 정규화 로직을 `normalizeSmartRatioParams`, `normalizeUrl`과 같은 비공개 메서드로 분리하여 코드 구조를 개선
- API 문서(Swagger)의 `ApiOperation` 및 `ApiProperty` 설명을 '스마트경쟁률'로 통일하여 명확성을 높임
- `package.json`에 `dev` 스크립트를 추가하고 버전을 `1.0.0`으로 업데이트함