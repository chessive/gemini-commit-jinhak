feat(data-model, consult-history): ConsultHistory JSON 기반 마이그레이션 및 스키마 개선

ConsultHistory 모델을 하드코딩된 필드에서 완전 JSON 기반 구조로 마이그레이션하여 확장성, 유지보수성을 확보하고 SQLite INSERT 에러를 해결함.

### 주요 변경 사항

- **데이터 모델 구조 변경:**
  - `ConsultHistory` 모델에서 `korScore`, `engScore`, `mathScore`, `korType`, `mathType` 등 모든 하드코딩된 점수, 타입, 커스텀 입력 필드(총 13개)를 제거함.
  - 모든 학생 정보를 담는 단일 `student_info_json` 필드를 도입하여 데이터 구조를 단순화하고 유연성을 높임.
  - 스키마 버전 관리를 위한 `schema_version` 필드를 추가함.

- **데이터베이스 스키마 업데이트:**
  - `lib/data/sql_scripts.dart`에서 `ConsultHistory` 테이블 스키마를 재작성하여 제거된 필드를 반영하고 `student_info_json` 및 `schema_version` 필드를 포함함.
  - `inputDate` 필드에 대한 인덱스(`idx_consult_history_date`)를 추가하여 검색 성능을 향상시킴.
  - `lib/data/sql_api.dart`에 인덱스 생성 로직을 추가함.

- **모델 및 서비스 로직 재작성:**
  - `lib/models/ConsultHistory.dart` 모델을 재작성하여 JSON 파싱 및 필드 접근을 위한 헬퍼 메서드(`getFieldValue`, `getTypeLabel` 등)를 추가함.
  - 하위 호환성을 위해 구식 필드를 `student_info_json`으로 자동 변환하는 `_migrateLegacyFields` 로직을 구현함.
  - `lib/providers/foundation_store.dart`의 `setConsultHistoryByCalculate` 메서드를 재작성하여 점수 및 타입 정보를 `student_info_json`에 JSON 형태로 저장하도록 변경함.
  - `lib/services/excel_service.dart` 및 `lib/screens/statistics/components/stuinfo_consult_history_data_source.dart`에서 `ConsultHistory` 모델의 새로운 JSON 헬퍼 메서드를 사용하여 데이터에 접근하도록 수정함.

### 해결된 문제 및 개선 효과

- **SQLite INSERT 에러 해결:** `korType` 컬럼 부재로 발생하던 `DatabaseException`을 해결하여 상담 완료 시 데이터 저장 안정성을 확보함.
- **코드 단순화 및 유지보수성 향상:** 하드코딩된 필드를 제거하고 단일 JSON 필드로 통합하여 코드 복잡도를 줄이고 유지보수를 용이하게 함.
- **확장성 확보:** 향후 새로운 학생 정보 필드가 추가되더라도 앱 재배포 없이 `CustomConfig` 변경만으로 반영 가능하도록 구조를 개선함.
- **데이터 무결성 및 안정성:** `schema_version`을 통해 데이터 스키마 변경을 추적하고, JSON 유효성 검증 헬퍼를 제공하여 데이터 무결성을 강화함.
