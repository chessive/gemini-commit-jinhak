docs(swagger): API 명세 문서화 및 DTO 예시 데이터 보강 (v1.0.1)

- Crawler 및 Test 컨트롤러의 14개 엔드포인트에 Swagger 데코레이터(`@ApiOperation`, `@ApiBody`, `@ApiResponse`) 전면 적용
- `crawler.swagger.constant.ts` 상수를 신규 추가하여 Swagger 메시지, 예시 데이터(Example), 응답 스키마를 중앙에서 관리
- 주요 DTO(`ServiceListRequestDto`, `CrawlTestDto` 등)에 `@ApiProperty`를 통한 필드 설명 및 예시 값 추가
- `UnivType` 관련 상수(`MOA_UNIV_TYPE`) 정의 및 문서화 (4년제/전문대/전체)
- `CHANGELOG.md` 업데이트
