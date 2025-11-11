feat(foundation, student-form-schema): Foundation 데이터 동기화에 학생 폼 스키마 추가

- `consulting-service`의 `StudentFormSchema` 데이터를 `consulting-admin-server`로 동기화하는 기능을 구현했습니다.
- `FoundationRepository`에 `StudentFormSchema` 관련 로직을 추가하여, 기존 Foundation 데이터 동기화 프로세스에 통합했습니다.

- **주요 변경사항:**
  - `foundation.repository.ts`에 `insertStudentFormSchema` 메서드 추가
    - `StudentFormSchema` 데이터를 배치(batch)로 삽입하는 기능 구현
  - `syncFoundationFromServer` 동기화 메서드 목록에 `insertStudentFormSchema` 추가
  - `deleteAll` 메서드에 `studentFormSchema` 테이블 삭제 로직 추가
  - `getFoundationData`, `getFoundationDataForService` 조회 대상에 `StudentFormSchema` 추가
