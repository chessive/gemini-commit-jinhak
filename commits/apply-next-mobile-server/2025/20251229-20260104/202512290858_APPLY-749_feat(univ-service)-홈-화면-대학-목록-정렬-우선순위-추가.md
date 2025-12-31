[APPLY-749] feat(univ-service): 홈 화면 대학 목록 정렬 우선순위 추가

- 홈 화면 대학 목록 조회 시, 4년제 대학(진학어플라이 서비스)이 우선 노출되도록 정렬 로직을 개선함.
- `univServiceID`가 '1'로 시작하는 대학을 `shortName`보다 높은 우선순위로 정렬하도록 변경함.
- 변경된 정렬 순서: `statusOrder` → `cooperator` → **`univServiceID` (4년제 우선)** → `shortName`
- `UnivServiceService.applyHomeScreenSort` 메서드에 관련 로직을 적용함.