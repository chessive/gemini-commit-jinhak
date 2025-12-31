[APPLY-743] feat(ratio, home): 경쟁률 랭킹 Fallback 로직 및 DTO 상속 구조 개선

- 실시간 클릭 데이터가 부족할 경우 전년도 학과별 경쟁률 데이터를 노출하여 랭킹 서비스의 가용성을 보장함.
- **주요 변경 사항:**
  - **Fallback 서비스 로직 구현:**
    - `RatioRankingService.getRankingsWithFallback` 메서드를 추가하여 2단계 조회 전략(클릭 기반 → 학과별 Fallback)을 구현함.
  - **DTO 리팩토링 및 버그 수정:**
    - `BaseRatioRankingListResponseDto`를 도입하여 공통 필드를 추상화함.
    - `MajorRatioRankingResponseDto`에서 `IntersectionType` 사용 시 런타임 속성 누락 문제를 해결하기 위해, 생성자에서 모든 필드를 명시적으로 할당하도록 수정함.
  - **API 및 문서 개선:**
    - `HomeController`의 랭킹 조회 API가 Fallback 로직을 사용하도록 수정하고, Swagger 문서에 `oneOf` 스키마와 `displayMode` 설명을 추가함.
    - 클릭 기반 데이터만 조회하는 레거시 지원용 엔드포인트(`GET /ranking/click-based`)를 추가하고 `deprecated` 처리함.
  - **테스트 추가:**
    - Fallback 시나리오별 단위 테스트를 작성하여 로직의 정확성을 검증함.