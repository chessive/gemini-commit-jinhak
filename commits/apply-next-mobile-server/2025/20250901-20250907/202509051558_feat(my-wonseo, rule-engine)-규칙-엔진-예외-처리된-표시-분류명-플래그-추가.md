feat(my-wonseo, rule-engine): 규칙 엔진 예외 처리된 표시 분류명 플래그 추가

- 규칙 엔진(Rule-Engine)에 의해 '표시 분류명(displayCategoryName)'이 변경되었는지 여부를 클라이언트에서 식별할 수 있도록 `isExceptionDisplayCategoryName` 플래그를 추가합니다.
- `RuleApplierService`에서 `displayCategoryName` 필드를 성공적으로 변경하는 규칙이 적용될 때, 해당 아이템의 `isExceptionDisplayCategoryName` 값을 `true`로 설정합니다.
- 이 플래그는 다음 DTO에 추가되어 API 응답에 포함됩니다:
  - `ApplyListResponseDto`
  - `PayInfoResponseItemDto`
