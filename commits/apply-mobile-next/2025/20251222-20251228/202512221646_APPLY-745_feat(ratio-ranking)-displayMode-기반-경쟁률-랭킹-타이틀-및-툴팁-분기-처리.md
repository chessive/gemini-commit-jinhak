[APPLY-745] feat(ratio-ranking): displayMode 기반 경쟁률 랭킹 타이틀 및 툴팁 분기 처리

- 백엔드 displayMode 변경에 맞춰 경쟁률 랭킹 섹션의 타이틀과 툴팁 문구를 동적으로 분기 처리함.
- **주요 변경 사항**:
  - `RatioDisplayMode` 타입을 단일 소스로 통합하고, `isValidDisplayMode` 타입 가드를 추가하여 런타임 안정성을 확보함.
  - `getRankingTitle` 및 `getTooltipMessage` 함수를 개선하여 'UnivBased', 'ClickBased', 'MajorBased' 모드별로 적절한 문구를 반환하도록 수정함.
  - `DEFAULT_RANKING_DATA`의 학년도(schoolYear)를 현재 날짜 기준으로 동적으로 계산하도록 개선함.
  - `RatioRankingTooltip` 컴포넌트에 `displayMode`와 `schoolYear` props를 추가하여 정확한 정보를 표시하도록 업데이트함.