feat(scoring): 점수 계산 메소드 정의(CalcMethodDefinition) CRUD API 구현

'점수 계산 메소드 정의(CalcMethodDefinition)'에 대한 CRUD API 기능을 구현함.
이를 통해 클라이언트에서 계산 방법에 대한 명세(입력/출력 스키마, 예시 등)를 동적으로 관리할 수 있는 기반을 마련함.

- **Controller 추가 (`score-calc-method-definition.controller.ts`)**:
  - `scoring/calc-method-definition` 경로에 대한 GET, POST, PUT, DELETE 엔드포인트를 정의함.
  - 경로 파라미터(idx) 유효성 검사를 위한 `CalcMethodDefinitionParamDto`를 적용함.

- **Service 추가 (`score-calc-method-definition.service.ts`)**:
  - `CalcMethodDefinition`의 생성, 조회, 수정, 삭제 비즈니스 로직을 구현함.
  - DB의 JSON 필드(SourceSchema, TargetSchema 등)를 서비스 계층에서 객체로 자동 변환하는 로직을 추가하여 데이터 처리의 일관성을 확보함.

- **Repository 수정 (`score-calc-method-definition.repository.ts`)**:
  - 기존의 복잡한 재정렬 로직을 제거하고, IDX를 기준으로 동작하는 단순하고 명확한 CRUD 쿼리 메소드를 구현함.

- **DTO 수정 (`calc-method-definition.dto.ts`)**:
  - `class-transformer`의 `@Transform` 데코레이터를 사용하여, 컨트롤러와 서비스 간 데이터 교환 시 JSON 문자열과 객체가 자동으로 변환되도록 개선함.

- **모듈 통합**:
  - 신규 생성된 Controller, Service, Repository를 Scoring 모듈의 `providers`와 `controllers`에 등록하여 시스템에 통합함.
