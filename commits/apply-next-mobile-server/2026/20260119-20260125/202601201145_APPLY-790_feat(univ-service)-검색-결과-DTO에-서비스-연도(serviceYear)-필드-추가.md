[APPLY-790] feat(univ-service): 검색 결과 DTO에 서비스 연도(serviceYear) 필드 추가

- 클라이언트에서 대학 서비스의 연도 정보를 활용할 수 있도록 검색 결과에 `serviceYear` 필드를 추가함.
- **주요 변경 사항:**
  - **Interface 수정:** `ServiceListItem`의 `ServiceYear` 타입을 `number`로 변경하고, `UnivListItem`에 해당 필드를 추가함.
  - **DTO 확장:** `UnivListItemDto`에 `serviceYear` 필드를 추가하고 Swagger 문서를 적용함.
  - **매핑 로직 개선:** `mapServiceListToUnivList`에서 서비스 연도 데이터를 숫자형으로 변환하여 매핑하도록 수정함.
  - **테스트 업데이트:** 관련 서비스 및 리포지토리 테스트의 Mock 데이터에 `ServiceYear` 값을 추가하여 정합성을 검증함.
