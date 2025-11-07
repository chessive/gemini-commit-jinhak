fix(excel): 엑셀 내보내기 시 boolean/null 타입 오류 수정 및 안정성 강화

엑셀 내보내기 기능에서 `type 'Null' is not a subtype of type 'bool'` 오류가 발생하는 문제를 해결하고, 데이터 처리 전반의 안정성을 대폭 강화함.

### 원인

1.  **설정값 누락**: `_getConfigurations` 메서드에서 `isActiveKorType` 등 일부 `isActive` 플래그가 누락됨.
2.  **Null-unsafe 접근**: `if (config['key'])`와 같이 `null` 값을 허용하지 않는 boolean 조건문 사용.
3.  **Boolean 처리 부재**: 동적 필드 중 `FieldType.agree`, `FieldType.checkbox`의 `boolean` 값을 '동의'/'미동의' 문자열로 변환하는 로직 부재.
4.  **부족한 예외 처리**: `_setCellValue`, `_setHeaderStyles` 등에서 데이터나 스타일 오류 발생 시 전체 프로세스가 중단될 위험 존재.

### 주요 변경 사항

- **1. 근본 원인 해결 (Null-Safety 강화):**
  - `_getConfigurations`에 누락되었던 모든 `isActive...` 설정 플래그를 추가함.
  - 프로젝트 전반의 `if (config['key'])` 조건문을 `if (config['key'] == true)`로 변경하여, `null` 값에 대한 안정성을 확보하고 `bool` 타입 오류를 원천적으로 해결함.

- **2. Boolean 필드 명시적 처리:**
  - `_getStudentInfoExtractors`에 `FieldType.agree`, `FieldType.checkbox`를 위한 별도 로직을 추가하여, `true`는 '동의', `false`는 '미동의', `null`은 '-'로 명확하게 변환하도록 수정함.

- **3. 포괄적인 예외 처리 및 안정성 강화:**
  - **`_setCellValue`:** 숫자, 날짜, 텍스트 등 타입별 데이터 변환 로직을 개별 `try-catch`로 감싸, 특정 셀의 오류가 전체 내보내기를 중단시키지 않도록 방어함.
  - **`_setHeaderStyles`:** 스타일링 관련 모든 로직에 `try-catch`를 적용하여, Syncfusion 라이브러리 내부 오류 등을 포함한 예외 발생 시에도 스타일만 실패하고 작업은 계속되도록 보장함.

- **4. 코드 품질 및 디버깅 개선:**
  - **상수화:** 반복 사용되는 '동의', '미동의', '-' 문자열을 `_ExcelCellConstants` 클래스로 분리하여 코드 가독성 및 일관성을 향상시킴.
  - **구조화된 로깅:** 에러 로그에 `[ExcelService]` 접두어와 Key-Value 형식을 적용하여 디버깅 효율을 높임.
  - **설정 검증:** 개발 모드에서만 동작하는 `_validateConfiguration` 검증 로직을 `assert`를 통해 추가하여, 필수 설정값 누락을 조기에 발견할 수 있도록 함.

### 기대 효과

- **안정성 확보**: 특정 데이터의 타입 오류나 스타일링 실패로 인해 엑셀 파일 생성이 중단되는 문제 완전 해결.
- **데이터 정확성**: 동적 폼의 boolean 필드 값이 엑셀에 '동의'/'미동의'로 정확하게 표시됨.
- **유지보수성 향상**: 방어적 코드와 명확한 에러 로깅을 통해 향후 문제 발생 시 원인 파악 및 대응이 용이해짐.
