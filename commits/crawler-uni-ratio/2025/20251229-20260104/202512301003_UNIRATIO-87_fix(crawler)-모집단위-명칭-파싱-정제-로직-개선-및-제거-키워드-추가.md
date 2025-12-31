[UNIRATIO-87] fix(crawler): 모집단위 명칭 파싱 정제 로직 개선 및 제거 키워드 추가

- **모집단위 데이터 정제 강화 (`crawler.data.service.ts`)**
  - 모집단위(`MajorName`) 및 세부전공(`SubMajorName`) 추출 로직에 `processText` 함수를 적용하여 텍스트 정제 과정을 강화함
  - `{{-}}` 구분자를 사용하는 복합 명칭 파싱 시, 분리된 각 부분에 대해 정제 로직이 누락되지 않도록 수정하여 데이터 품질 향상

- **불필요한 키워드 필터링 추가 (`remove-multiple-keyword.ts`)**
  - `KEYWORDS_TO_REMOVE` 목록에 '희망학과 100%배정'을 추가하여 해당 문구가 포함된 데이터 수집 시 자동으로 제거되도록 조치함
