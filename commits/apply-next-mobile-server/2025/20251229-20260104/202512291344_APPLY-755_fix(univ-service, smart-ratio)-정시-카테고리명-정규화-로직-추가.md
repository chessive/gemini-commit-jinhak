[APPLY-755] fix(univ-service, smart-ratio): 정시 카테고리명 정규화 로직 추가

- 대학 상세 조회 시, 다양한 형태의 정시 카테고리 명('정시(가군)', '정시 모집' 등)을 '정시'로 정규화하여 스마트 경쟁률 링크가 정상적으로 조회되도록 수정함.
- **주요 변경 사항:**
  - `UnivServiceService`: `convertCategoryName` 메서드를 추가하여 '정시' 키워드가 포함된 카테고리 명을 '정시'로 변환하고, 이를 기반으로 과거 경쟁률 링크를 조회하도록 로직을 개선함.
  - `SmartRatioService`: `convertCategoryName` 메서드에 '정시' 포함 여부를 확인하는 로직을 추가하여 카테고리 매칭 범위를 확장함.
