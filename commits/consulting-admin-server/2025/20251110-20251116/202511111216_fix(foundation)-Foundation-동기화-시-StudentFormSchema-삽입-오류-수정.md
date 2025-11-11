fix(foundation): Foundation 동기화 시 StudentFormSchema 삽입 오류 수정

- `insertStudentFormSchema` 메서드에서 동기화 데이터 처리 시 발생하는 오류를 수정했습니다.
- 원본 데이터에 포함된 `SchemaId`(auto-increment 필드)를 삽입 전에 제거하여, 데이터베이스 기본 키 제약 조건 위반 오류를 방지합니다.
- Prisma와 내부 로깅 유틸리티가 각각 요구하는 `ServiceId`와 `ServiceID` 필드를 모두 포함하도록 데이터 변환 로직을 개선했습니다.

- **주요 변경사항:**
  - `insertStudentFormSchema`의 DTO 변환 로직 수정
    - `SchemaId` 필드를 명시적으로 제거하여 auto-increment 충돌 방지
    - Prisma 모델 필드(`ServiceId`)와 로깅용 필드(`ServiceID`)를 모두 전달하도록 개선
