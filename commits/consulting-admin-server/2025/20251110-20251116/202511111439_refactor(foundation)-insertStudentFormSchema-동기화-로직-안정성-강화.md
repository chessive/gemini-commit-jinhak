refactor(foundation): insertStudentFormSchema 동기화 로직 안정성 강화

- `insertStudentFormSchema` 메서드의 구현을 범용 `createManyAndLog` 헬퍼 대신 Prisma 클라이언트를 직접 사용하도록 리팩토링하여, 로직의 명확성과 안정성을 개선했습니다.

- **주요 변경사항:**
  - Prisma 클라이언트를 직접 호출하여 `studentFormSchema` 데이터를 `createMany`로 삽입하도록 변경
  - 데이터 변환 로직을 단순화하여, auto-increment 필드인 `SchemaId`만 명확히 제거
  - `createManyAndLog`의 로깅 제약으로 인해 필요했던 `ServiceID` 중복 추가 로직 제거
  - 데이터가 없을 경우를 처리하는 가드 구문(guard clause) 추가
  - 작업 결과를 반환하고, 더 명확한 컨텍스트를 포함하는 로그를 직접 생성하도록 수정
