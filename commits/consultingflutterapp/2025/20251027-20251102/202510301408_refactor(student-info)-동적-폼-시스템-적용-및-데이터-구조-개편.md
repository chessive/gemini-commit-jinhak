refactor(student-info): 동적 폼 시스템 적용 및 데이터 구조 개편

기존의 정적 학생 정보 입력 폼을 새로운 서버 기반 동적 폼 시스템으로 교체하고, 관련 데이터 구조를 개편함.

### 주요 변경 사항

- **UI 리팩토링:**
  - `student_info_form`: 기존의 하드코딩된 폼 위젯을 `DynamicFormBuilder`를 사용하도록 전면 교체함.
  - `student_info_screen`: 동적 폼 데이터(`DynamicFormData`)를 처리하도록 로직을 수정함.
  - `home_screen`: 동적 폼 사용 여부에 따라 학생 정보 입력 화면으로의 진입을 조건부로 처리함.

- **데이터 구조 개편:**
  - `ConsultHistory` 모델: 개별 필드로 관리되던 학생 정보(`name`, `gender`, `phone` 등)를 `studentInfoJson` 필드 하나로 통합하여 JSON 형태로 저장하도록 변경함.
  - `foundation_store`: `setConsultHistoryByStuInfo` 메서드가 JSON 데이터를 받도록 수정함.

- **서비스 레이어 수정:**
  - `excel_service`: 엑셀 파일 생성 시, `studentInfoJson`을 파싱하여 학생 정보를 채우도록 로직을 업데이트함.
