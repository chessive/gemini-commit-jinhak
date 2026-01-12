[APPLY-786] refactor(internal, smart-ratio): 파일 네이밍 개선 및 타입 시스템 강화

- 코드베이스의 일관성과 가독성을 높이기 위해 파일 리네이밍, 타입 추가, 테스트 코드 한글화 작업을 수행함.
- **주요 변경 사항:**
  - **도메인 중심 네이밍 변경:**
    - `FileWriterService`를 `AdmissionPeriodFileService`로 리네임하여 입시 기간 설정 파일을 처리하는 서비스임을 명확히 함.
    - 관련 파일들(`file-writer.service.ts` 등)과 모듈 정의, 테스트 파일들을 새로운 이름에 맞춰 일괄 업데이트함.
  - **타입 시스템 개선:**
    - `AdmissionCategory` 타입을 신규 정의하여 '수시', '정시' 등의 카테고리 값을 타입 안전하게 관리함.
  - **테스트 코드 가독성 향상:**
    - `smart-ratio` 모듈의 테스트 설명(`it` 구문)을 영어에서 한글로 변경하여 의도를 더 쉽게 파악할 수 있도록 개선함.
    - `SmartRatioRepository` 테스트에서 실제 쿼리와 일치하도록 `schoolYear` 필드를 `select` 절에 추가함.
