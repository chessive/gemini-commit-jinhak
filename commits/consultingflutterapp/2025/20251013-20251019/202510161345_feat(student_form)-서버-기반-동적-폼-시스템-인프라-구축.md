feat(student_form): 서버-기반 동적 폼 시스템 인프라 구축

### 1. 모델 클래스 생성
- `StudentFormSchema` 및 `DynamicFormData` 모델 클래스를 추가하고 `json_serializable`을 적용하여 JSON 직렬화/역직렬화 기능을 구현했습니다.
- `FieldType` enum, `ValidationRule`, `SelectOption` 등 하위 모델을 정의했습니다.
- `version`, `serviceId` 타입을 `int`로 변경하고 `isEncrypt` 필드를 추가하여 서버 명세와 일치시켰습니다.

### 2. API 통신 레이어 확장
- `ConsultingApi`에 동적 폼 관련 메서드를 추가했습니다.
  - `fetchStudentFormSchema()`: 서버에서 폼 스키마 조회
  - `fetchSchemaVersion()`: 스키마 버전 확인
  - `saveConsultHistoryV2()`: 동적 폼 데이터를 서버에 저장
- `ApiEndpoints`에 관련 엔드포인트 경로를 추가했습니다.

### 3. Provider 상태 관리 확장
- `ConsultingStore`에 `StudentFormSchema` 및 `DynamicFormData` 상태를 추가했습니다.
- 폼 데이터 초기화(`initFormData`), 업데이트(`updateFormField`), 유효성 검증(`validateForm`) 등 상태 관리 메서드를 구현했습니다.
- `useDynamicForm` getter를 추가하여 동적 폼 시스템 사용 여부를 동적으로 결정하도록 했습니다.

### 4. 로컬 저장소 구조 변경
- `SqlApi` 및 `sql_scripts.dart`를 수정하여 데이터베이스 스키마를 변경했습니다.
- `student_form_schema` 테이블을 추가하여 폼 스키마를 SQLite에 캐싱합니다.
- `ConsultHistory` 테이블에 `student_info_json` 컬럼을 추가하여 동적 폼 데이터를 저장합니다.

### 5. UI 연동
- `RegisterScreen` 진입 시 `StudentFormSchema`를 비동기적으로 로드하고 캐싱하는 로직을 추가했습니다.
- 스키마 로드 실패 시 기존 하드코딩된 폼을 사용하도록 폴백(fallback) 기능을 구현했습니다.

### 6. 의존성 추가
- `pubspec.yaml`에 `json_annotation`, `build_runner`, `json_serializable` 의존성을 추가했습니다.
