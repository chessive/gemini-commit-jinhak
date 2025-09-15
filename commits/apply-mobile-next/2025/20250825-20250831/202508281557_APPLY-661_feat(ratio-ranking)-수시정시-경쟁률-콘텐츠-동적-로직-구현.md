[APPLY-661] feat(ratio-ranking): 수시/정시에 따른 경쟁률 콘텐츠 동적 로직 구현

- categoryName(수시/정시) 값에 따라 경쟁률 관련 메시지가 동적으로 변경되도록 구현
  - 기존에 '수시'로 하드코딩 되어있던 부분을 동적 처리
- 주요 변경 사항
  - `ratio-ranking.constants.ts`: `getTooltipMessage`, `getRankingTitle`, `getNoDataMessage` 함수를 추가하여 시기별(수시/정시) 동적 메시지 생성
  - `ratio-ranking-tooltip.tsx`: `categoryName` prop을 전달받아 `getTooltipMessage` 함수로 동적 툴팁 메시지 표시
  - `ratio-ranking.tsx`: `getRankingTitle` 함수를 사용하여 동적 제목을 생성하고, `categoryName`을 하위 컴포넌트로 전달
  - `ratio-ranking-group.tsx`: `categoryName`을 `RatioRankingGroupSwiper`, `RatioRankingGroupWide` 컴포넌트로 전달
  - `ratio-ranking-group-swiper.tsx`, `ratio-ranking-group-wide.tsx`: `getNoDataMessage` 함수를 사용하여 데이터가 없을 때 표시되는 메시지를 동적으로 처리
