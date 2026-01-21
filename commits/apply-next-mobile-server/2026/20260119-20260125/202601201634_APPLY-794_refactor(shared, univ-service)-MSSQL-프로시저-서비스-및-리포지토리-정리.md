[APPLY-794] refactor(shared, univ-service): MSSQL 프로시저 서비스 및 리포지토리 정리

- TypeORM 다중 결과셋 버그 수정을 위해 도입된 `MssqlProcedureService`와 관련 리포지토리 코드를 최적화하고 import 구문을 정리함.
- **주요 변경 사항:**
  - **`UnivServiceRepository`:**
    - `MssqlProcedureService` 도입으로 더 이상 사용되지 않는 `DataSource` 주입을 제거하여 의존성을 간소화함.
    - 미사용 import를 삭제하고 코드 스타일을 통일함.
  - **`MssqlProcedureService`:**
    - 불필요한 공백과 주석을 정리하고 import 순서를 최적화하여 가독성을 높임.
- 이 변경은 기능적 수정 없이 코드의 품질과 유지보수성을 높이기 위한 마무리 작업임.