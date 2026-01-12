docs(db): Swagger 문서 강화 및 DTO 정리

- `db.swagger.constant.ts`를 신규 추가하여 DB 컨트롤러의 Swagger 메시지와 예시 데이터를 중앙 관리
- `DELETE /db/clear-specific` 엔드포인트에 상세 설명, 삭제 대상 테이블 목록(8개), 사용 예제(5개 케이스) 문서화
- `ClearSpecificDto`의 `@ApiProperty` 설명 보강 (enum 명시, createTime 제약사항 등) 및 미사용 `company` 필드 제거
- `DbRatioService.clearSpecificRatioCrawlData`에 `SchoolYear`, `CategoryName` 필수 파라미터 검증 로직 추가
- `CHANGELOG.md` 업데이트
