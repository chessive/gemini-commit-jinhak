feat(excel): CustomConfig 기반 조건부 헤더 생성 기능 구현

Excel 내보내기 기능에서 CustomConfig 설정에 따라 헤더를 동적으로 생성하도록 개선하여, 서비스별로 사용하지 않는 필드가 Excel에 빈 컬럼으로 표시되는 문제를 해결함.

### 주요 변경 사항

- **조건부 헤더 생성 (`excel_service.dart`):
  - `_getBasicSubjectHeaders`와 `_getResearchSubjectHeaders` 메서드가 `config`를 인자로 받아, `isActiveKorType`, `isActiveMathType`, `isActiveResOption` 등의 설정에 따라 관련 헤더(`국어 선택과목`, `수학 선택과목`, `탐구 선택과목` 등)를 동적으로 추가하도록 수정함.

- **탐구 선택과목 헤더 추가 (`excel_service.dart`):
  - 기존에 누락되었던 `res1OptionType`, `res2OptionType` (탐구 선택 과목명) 헤더와 데이터 추출 로직을 추가하여, 사용자가 선택한 탐구 과목(예: "화학I")이 Excel에 정상적으로 표시되도록 함.

- **불필요한 헤더 제거 (`excel_service.dart`):
  - UI에 입력 필드가 없는 `secForeignScore`(제2외국어) 헤더 생성 로직을 제거하고, 관련 데이터 추출 로직은 향후 구현을 위해 주석 처리함.

- **코드 품질 개선 (`excel_service.dart`):
  - 헤더 라벨을 '탐구 영역'(과탐/사탐)과 '탐구 선택과목'(화학I 등)으로 명확히 구분하여 가독성을 높임.
  - `_getResearchSubjectHeaders` 메서드의 구조를 개선하여 탐구1과 탐구2 그룹을 명확히 분리하고 유지보수성을 향상시킴.
