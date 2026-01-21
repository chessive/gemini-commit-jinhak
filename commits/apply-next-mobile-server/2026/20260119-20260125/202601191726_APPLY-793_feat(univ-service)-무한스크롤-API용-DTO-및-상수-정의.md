[APPLY-793] feat(univ-service): 무한스크롤 API용 DTO 및 상수 정의

- 대학 검색 페이지의 무한스크롤 전환을 위해 필요한 요청/응답 DTO와 공통 인터페이스를 정의함.
- **주요 변경 사항:**
  - **DTO 추가:**
    - `SearchInfiniteRequestDto`: 커서 기반 페이지네이션 파라미터(`cursor`, `take`) 및 기존 필터 필드를 포함함.
    - `SearchInfiniteResponseDto`: `nextCursor` 및 캐시 버전 관리를 위한 `cacheTimestamp` 필드를 포함함.
  - **인터페이스 정의:**
    - `UnivServiceSearchFilter`: 검색 API에서 공통으로 사용하는 필터 타입을 인터페이스로 분리하여 코드 중복을 제거함.
  - **상수 및 문서화:**
    - `SEARCH_INFINITE_PAGINATION`: 무한스크롤 관련 페이지네이션 설정값 추가.
    - `SWAGGER_UNIV_SERVICE.SEARCH_INFINITE`: 신규 엔드포인트에 대한 상세한 Swagger 명세 및 클라이언트 주의사항(커서 리셋 조건 등) 추가.
- 이 커밋은 무한스크롤 기능 구현을 위한 기반 데이터 구조를 설계한 단계임.