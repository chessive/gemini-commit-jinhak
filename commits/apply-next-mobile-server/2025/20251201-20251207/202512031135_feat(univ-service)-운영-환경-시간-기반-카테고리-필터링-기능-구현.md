feat(univ-service): 운영 환경 시간 기반 카테고리 필터링 기능 구현

- `production` 환경에서 특정 시간 이전까지 지정된 카테고리의 대학 목록을 필터링하는 기능을 추가함.
- **주요 변경 사항:**
  - `UnivFilter` 인터페이스를 추가하여, 외부 설정 파일(`CategoryType.json`)에서 시간 및 필터링 조건을 받아올 수 있도록 데이터 계약을 정의함.
  - `UnivService`에 `applyTimeBasedCategoryFilter` 메서드를 구현하여, `production` 환경일 때만 필터링 로직이 동작하도록 변경함.
    - 설정된 시간이 되면 필터링은 자동으로 비활성화되도록 처리함.
    - 필터링 조건은 `CategoryTypeName`(정확히 일치)과 `CategoryName`(부분 문자열 포함)을 조합하여 적용함.
  - 외부 설정 파일 조회 로직을 리팩터링하여 `UnivFilter`를 포함한 전체 응답을 캐싱하도록 개선하고, 실패 시 안전하게 원본 목록을 반환하도록 수정함.
- 또한, 테스트 코드의 안정성을 높이기 위해 `winston` 로거와 여러 `interceptor`들을 모킹 처리하고, 서비스 테스트(`.spec.spec.ts`) 파일을 `automock` 기반으로 리팩터링함.