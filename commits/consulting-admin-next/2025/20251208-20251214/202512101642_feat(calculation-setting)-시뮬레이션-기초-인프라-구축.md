feat(calculation-setting): 시뮬레이션 기초 인프라 구축 (API, 타입, 스토어)

계산 설정 시뮬레이션 기능을 위한 기초 데이터 모델, 상태 관리 스토어, 그리고 서버 통신 API를 구현함.

- **데이터 모델 및 타입 정의 (`models/types`):**
  - `CalcCase`, `CalcMethod` 등 계산 설정 관련 핵심 인터페이스 정의.
  - `SimulationState` 등 시뮬레이션 상태 관리를 위한 타입 정의.

- **상태 관리 스토어 구현 (`models/store.ts`, `hooks/use-simulation-store.ts`):**
  - Zustand를 사용하여 시뮬레이션 입력값, 계산 결과, UI 상태를 관리하는 전역 스토어 구현.
  - 입력 단계(`input`)와 결과 단계(`result`) 전환 로직 포함.

- **API 및 쿼리 훅 구현 (`apis`, `hooks`):**
  - `getCalcCase`, `getCustomConfig` 등 서버 API 연동 함수 구현.
  - React Query를 활용한 데이터 페칭 훅(`useGetCalcCaseQuery` 등) 구현.
  - `server-api.ts` 플러그인에 신규 API 엔드포인트 등록.
