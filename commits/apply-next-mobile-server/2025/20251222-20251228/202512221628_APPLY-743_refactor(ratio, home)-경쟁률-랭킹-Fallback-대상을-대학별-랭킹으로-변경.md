[APPLY-743] refactor(ratio, home): 경쟁률 랭킹 Fallback 대상을 대학별 랭킹으로 변경

- 비즈니스 요구사항 변경에 따라, 클릭 기반 데이터 부재 시 Fallback 대상을 '전년도 학과별 랭킹'에서 '전년도 대학별 랭킹'으로 수정함.
- **주요 변경 사항:**
  - **서비스 로직 수정:**
    - `getRankingsWithFallback`: Fallback 시 `findMajorRankings` 대신 `findUnivRankings`를 호출하도록 변경함.
    - 반환 시 `RatioDisplayMode.UNIV_BASED`를 사용하여 데이터 출처를 명시함.
  - **DTO 및 컨트롤러 단순화:**
    - Fallback 데이터 타입이 `RatioRankingListResponseDto`로 통일됨에 따라, 컨트롤러의 반환 타입 및 Swagger 문서에서 불필요한 유니온 타입(`oneOf`) 정의를 제거하고 단일 타입으로 단순화함.
  - **테스트 수정:**
    - Fallback 시나리오 테스트를 '학과별' 검증에서 '대학별' 검증으로 업데이트함.