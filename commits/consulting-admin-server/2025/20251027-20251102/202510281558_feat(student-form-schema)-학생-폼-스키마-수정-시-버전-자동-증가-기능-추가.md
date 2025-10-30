feat(student-form-schema): 학생 폼 스키마 수정 시 버전 자동 증가 기능 추가

- `StudentFormSchemaRepository.updateSchema` 메서드 로직을 개선함.
  - 스키마 수정 시, 해당 서비스(`ServiceId`)의 최신 스키마 버전을 조회하여 자동으로 +1 한 값을 새로운 버전으로 부여함.
  - `payload`에 `Version: nextVersion`을 추가하여 DB에 업데이트함.
  - `schemaJson` 내부의 `version` 필드에도 동일한 `nextVersion` 값을 할당하여 데이터 정합성을 보장함.