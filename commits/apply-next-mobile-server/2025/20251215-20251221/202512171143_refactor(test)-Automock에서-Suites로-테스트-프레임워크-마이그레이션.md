refactor(test): Automock에서 Suites로 테스트 프레임워크 마이그레이션

Jest 30 업그레이드에 따른 호환성 확보를 위해, 기존 `@automock/jest` 기반의 테스트 환경을 `@suites` 라이브러리로 전면 마이그레이션함. 24개의 테스트 파일 전체를 변환하고, `@automock` 의존성을 완전히 제거함.

- **테스트 라이브러리 교체**
  - `@automock/adapters.nestjs`, `@automock/jest` 패키지 삭제
  - `@suites/di.nestjs`, `@suites/doubles.jest`, `@suites/unit` 패키지 신규 설치

- **API 및 패턴 변경 적용**
  - 테스트 초기화 방식을 동기식(`TestBed.create`)에서 비동기식(`await TestBed.solitary`)으로 전환하여 안정성 확보
  - `jest.Mocked<T>` 타입을 `@suites/unit`의 `Mocked<T>` 타입으로 교체하여 타입 호환성 유지
  - 모킹 구현 정의 방식을 `.using()`에서 `.impl((stubFn) => ({...}))` 형태로 변경
  - 문자열 토큰 주입 시 `.mock<Type>('TOKEN')` 패턴 적용

- **영향 범위**
  - `univ-service` 모듈을 포함한 24개 서비스/리포지토리/컨트롤러 테스트 파일 전체
  - `auth`, `member`, `payment`, `customer`, `internal` 등 주요 도메인 전반
