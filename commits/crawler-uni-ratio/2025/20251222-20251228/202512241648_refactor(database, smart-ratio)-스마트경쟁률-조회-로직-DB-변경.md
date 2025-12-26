refactor(database, smart-ratio): 스마트경쟁률 조회 로직을 내부 API에서 로컬 DB 쿼리로 변경

- `api-uni-ratio` API 호출(`getSmartRatio`) 제거 및 `DbSmartRatioService`를 통한 로컬 DB 직접 조회로 변경
  - 테스트 환경(`vapplytest`)에서 등록되지 않은 URL로 인해 발생하는 404 오류 근본 해결
  - 내부망 HTTP 요청 제거를 통해 응답 속도 향상 및 네트워크 의존성 제거
- `DbSmartRatioService`에 `findByRatioLink`, `findByYearAndCategory` 메서드 및 관련 SQL 쿼리 구현
  - `RatioLink` 조회 시 프로토콜(`http`, `https`) 무관하게 검색되도록 정규화 로직 적용
- `CommonService` 및 `SmartratioService`의 비즈니스 로직을 신규 DB 서비스 기반으로 리팩토링
- 조회 실패 시 `Error` 대신 `NotFoundException`을 사용하여 명시적인 404 응답 처리
