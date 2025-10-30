feat(student-form): 학교 선택 위젯에 대학 선택 기능 추가

기존 `SchoolSelectorWidget`을 확장하여 고등학교와 대학교를 모두 선택할 수 있도록 기능을 개선함.

### 주요 변경 사항

- **동적 데이터 소스:**
  - `metadata.schoolType` 필드 ('highschool' 또는 'univ')를 읽어 데이터 소스를 동적으로 전환함.
  - `highschool`: `FoundationStore`의 `highSchoolList` 사용.
  - `univ`: `FoundationStore`의 `univList` 사용.

- **UI 및 로직 개선:**
  - `initState`: `schoolType`에 따라 `schoolOptions`을 설정하고, `initialValue`에서 학교명을 올바르게 추출하도록 로직 수정.
  - `onSelected`: 선택된 항목에 따라 `schoolCode`/`schoolName` 또는 `univId`/`univName` 형식으로 데이터를 반환하도록 분기 처리.

- **하위 호환성:**
  - `metadata.schoolType`이 없는 경우 기본값 'highschool'로 동작하여 기존 기능의 하위 호환성을 보장함.
