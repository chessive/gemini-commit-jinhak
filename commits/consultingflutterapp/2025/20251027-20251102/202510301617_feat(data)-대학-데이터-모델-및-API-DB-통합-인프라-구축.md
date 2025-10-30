feat(data): 대학 데이터 모델 및 API, DB 통합 인프라 구축

앱에 대학 데이터를 통합하기 위한 백엔드 인프라를 구축함.

### 주요 변경 사항

- **데이터 모델 추가:**
  - `University` 모델을 신규로 추가하여 대학 정보(ID, 이름, 유형, 지역)를 관리함.

- **API 및 DB 연동:**
  - `api_endpoints`: `/common/university` 엔드포인트 추가.
  - `consulting_api`: `fetchUniversity` 메서드를 구현하여 대학 데이터를 조회하는 기능 추가.
  - `sql_scripts`: `University` 테이블 생성을 위한 SQL 스크립트 추가.
  - `sql_api`: 대학 데이터를 로컬 DB에 캐시하고 조회하는 CRUD 로직 구현.

- **상태 관리 통합:**
  - `foundation_store`: `univList` 상태와 `setUniversity` 메서드를 추가하여 대학 데이터를 앱 전역에서 관리하도록 함.

- **데이터 로딩 로직:**
  - `register_screen`: 앱 초기화 시 `_checkAndFetchUniversityData`를 통해 대학 데이터를 비동기적으로 로드하고 DB에 캐시하도록 로직 추가.
