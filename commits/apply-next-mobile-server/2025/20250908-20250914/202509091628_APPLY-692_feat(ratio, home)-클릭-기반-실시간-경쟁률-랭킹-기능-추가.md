[APPLY-692] feat(ratio, home): 클릭 기반 실시간 경쟁률 랭킹 기능 추가

- 사용자 클릭 데이터를 기반으로 집계되는 실시간 인기 대학 랭킹 기능을 추가합니다.

- **데이터베이스 및 엔티티 변경 (`RatioRanking`):**
  - 랭킹 데이터의 버전을 관리하기 위해 `version` 컬럼을 Primary Key에 추가합니다.
  - 클릭 기반 랭킹(`rankingBasis='Now'`)의 집계 기간을 추적하기 위해 `clickFromTime`, `clickToTime` 컬럼을 추가합니다.

- **리포지토리 및 서비스 로직 구현 (`RatioRanking`):**
  - `getLatestVersion`: 특정 조건에서 최신 랭킹 버전 번호를 조회하는 기능을 추가합니다.
  - `findClickBasedRankings`: 최신 버전의 클릭 기반 랭킹만 조회하는 로직을 구현합니다.
  - `getClickBasedRankings`: 서비스 로직을 구현하고, 대학 로고 및 스마트 경쟁률 링크를 포함시켜 최종 응답 데이터를 생성합니다.

- **API 엔드포인트 추가 및 변경 (`HomeController`):**
  - `GET /ranking`: 새로운 클릭 기반 랭킹 조회 API를 추가하고, 10분 단위로 응답을 캐싱하여 성능을 최적화합니다.
  - 기존 모집단위 기반 랭킹 API는 `GET /ranking/major-based`로 이동하고, `deprecated` 처리합니다.

- **DTO 수정 (`RatioRankingListResponseDto`):**
  - `displayMode` 필드를 추가하여, API 소비자가 '클릭 기반'과 '대학 기반' 등 랭킹의 종류를 명확히 구분할 수 있도록 개선합니다.
