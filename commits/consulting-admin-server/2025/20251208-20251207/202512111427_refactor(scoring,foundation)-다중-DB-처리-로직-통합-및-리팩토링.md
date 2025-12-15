refactor(scoring, foundation): 다중 DB 처리 로직 BaseRepository로 통합 및 점수 계산 메소드 리팩토링

- **BaseRepository 기능 확장 및 다중 DB 처리 추상화**
  - `getDatabases` 메서드를 추가하여 실행 환경(개발/운영)에 따른 대상 DB 목록(`devDb`, `testDb`, `realDb`) 동적 반환 구현
  - `createData`, `updateData`, `deleteData` 제네릭 메서드를 구현하여 모든 대상 DB에 대한 병렬 처리(`Promise.all`) 및 예외 처리 로직 중앙화
  - 개별 리포지토리에서 반복되던 `serverList` 순회 및 에러 핸들링 코드를 제거하여 유지보수성 향상

- **ScoreCalcMethodDefinition 모듈 리팩토링**
  - **Repository**: `BaseRepository`의 신규 메서드를 활용하여 코드를 간소화하고, 메서드 시그니처에서 `server` 파라미터 제거
  - **Service**: 불필요한 서버별 반복 호출 로직을 제거하고, 리포지토리 단일 호출로 변경
  - 삭제 로직에서 결과 검증 및 `ServiceException` 처리 강화, `ResponseDto`를 통한 명확한 응답 반환

- **기타 개선사항**
  - `src/features/foundation/dtos/index.ts`의 export 구문을 알파벳순으로 정렬하여 가독성 개선
