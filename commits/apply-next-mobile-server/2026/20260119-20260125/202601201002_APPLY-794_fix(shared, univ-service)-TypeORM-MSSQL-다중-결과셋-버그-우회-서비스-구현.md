[APPLY-794] fix(shared, univ-service): TypeORM MSSQL 다중 결과셋 버그 우회 서비스 구현

- TypeORM 0.3.x에서 MSSQL 저장 프로시저 호출 시 첫 번째 결과셋만 반환되는 버그를 해결하기 위해 `mssql` 드라이버를 직접 사용하는 공유 서비스를 구현함.
- **주요 변경 사항:**
  - **MssqlProcedureService 구현:**
    - `shared/database` 모듈에 `MssqlProcedureService`를 추가하여 TypeORM DataSource 내부의 ConnectionPool을 추출하고 `request.execute()`를 직접 호출하도록 구현함.
    - `ProcedureResult<T>` 제네릭 인터페이스를 정의하여 다중 결과셋(`recordsets`) 및 반환값(`returnValue`)에 대한 타입 안전성을 확보함.
  - **UnivServiceRepository 리팩토링:**
    - `getServiceList`, `getMagamServiceList` 메서드에서 기존 `dataSource.query()` 대신 `mssqlProcedureService.execute()`를 사용하도록 변경함.
    - 다중 결과셋(진학/유웨이)이 정상적으로 반환됨에 따라 병합 로직이 의도대로 동작하도록 수정함.
  - **테스트 추가:**
    - `MssqlProcedureService` 모킹을 통한 Repository 단위 테스트를 추가하여 다중 결과셋 처리 및 에러 핸들링 로직을 검증함.
