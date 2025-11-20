feat(database): 동적 계산 시스템을 위한 SQLite 스키마 및 캐싱 로직 구현

DB 기반 동적 점수 계산 시스템(Calc-Config V2)의 로컬 캐싱을 위해 SQLite 스키마를 정의하고, 관련 CRUD(Create, Read, Update, Delete) 로직을 구현함.

### 주요 변경 사항

- **SQLite 스키마 정의 (`sql_scripts.dart`):**

  - `ScoreConversionTable`: 점수 변환표 캐시 테이블.
  - `ScoreCalcMethodConfig`: 계산 방식(steps) 캐시 테이블.
  - `ScoreCalcConfig`: 계산 설정 매핑 캐시 테이블.
  - 쿼리 성능 최적화를 위해 `ServiceID`, `SATCalcCaseNo` 등을 기반으로 하는 7개의 인덱스 생성 스크립트를 추가함.

- **CRUD 및 캐싱 로직 구현 (`sql_api.dart`):**

  - **16개의 신규 메서드 추가**: 위 3개 테이블에 대한 `save*`, `get*`, `delete*` 등의 CRUD 메서드와 `saveAllCalcConfigData`, `deleteAllCalcConfigData`, `hasCalcConfigData` 등 여러 테이블을 원자적으로 관리하는 헬퍼 메서드를 구현함.
  - **트랜잭션 및 배치 처리**: `transaction`과 `batch`를 사용하여 여러 데이터를 한 번에 저장/삭제할 때의 데이터 정합성과 성능을 보장함.
  - **JSON 직렬화/역직렬화**: `ConfigJSON`, `ScoreConversionJSON`과 같은 복잡한 객체를 `TEXT` 타입으로 안전하게 저장하기 위해 `jsonEncode`/`jsonDecode` 로직을 적용함.

- **테이블 생성 로직 통합 (`sql_api.dart`):**
  - `createAllTables()` 메서드에 신규 테이블 3개와 인덱스 7개를 생성하는 로직을 통합하여 앱 초기화 시 자동으로 스키마가 구성되도록 함.
