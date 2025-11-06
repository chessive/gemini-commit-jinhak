refactor(consult-history, code-quality): ConsultHistory 마이그레이션 후 코드 리뷰 개선 사항 적용

ConsultHistory JSON 마이그레이션 완료 후 진행된 코드 리뷰에서 도출된 8가지 개선 사항을 적용하여 코드 품질, 안정성, 유지보수성을 향상시킴.

### 주요 변경 사항

- **코드 품질 및 가독성 개선:**
  - **DRY 원칙 적용:** `ConsultHistory`와 `foundation_store`에 중복되던 타입 변환 로직을 `ConsultHistory.enumToLabel()` static 메서드로 통합하여 유지보수 포인트를 단일화함.
  - **Map 기반 리팩토링:** `excel_service`의 긴 `switch-case` 문을 필드 추출 전략 Map으로 대체하여 코드 간결성 및 확장성을 높임.
  - **헬퍼 메서드 추가:** `stuinfo_consult_history_data_source`에 타입 변환 헬퍼 메서드를 추가하여 반복적인 코드를 제거하고 가독성을 개선함.
  - **상수화:** `foundation_store`에서 사용되던 매직 넘버 `0.0`을 `HSB_SCORE_THRESHOLD` 상수로 정의하여 코드의 의도를 명확히 함.

- **안정성 및 에러 핸들링 강화:**
  - **초기화 안정성 확보:** `ConsultHistory`의 `CustomConfig` 인스턴스 생성을 lazy getter 방식으로 변경하여 초기화 타이밍 문제를 원천적으로 방지하고 메모리 효율성을 개선함.
  - **상세 로깅:** `foundation_store`의 JSON 디코딩 에러 핸들링 로직을 강화하여, 에러 발생 시 `stackTrace`와 손상된 JSON 내용을 포함한 구조화된 로그를 남기도록 수정함.
  - **로깅 표준화:** `print()` 대신 `developer.log`를 사용하여 디버깅 시 필터링 및 검색이 용이하도록 로깅 방식을 표준화함.

- **데이터 유효성 검증 강화:**
  - `ConsultHistory`의 `validateStudentInfo()` 메서드 로직을 강화하여, 필드의 존재 여부뿐만 아니라 값이 유효한 숫자(0보다 큰)인지 검증하는 `_isValidScore` 헬퍼를 추가하여 데이터 무결성을 높임.
