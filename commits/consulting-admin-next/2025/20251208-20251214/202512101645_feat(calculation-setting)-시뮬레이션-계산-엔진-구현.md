feat(calculation-setting): 시뮬레이션 계산 엔진 구현

계산 시뮬레이션의 핵심인 점수 계산 엔진을 구현하고, 랜덤 점수 생성을 위한 유틸리티를 추가함.

- **계산 엔진 구현 (`services/calculation-engine.ts`):**
  - 서버에서 받은 계산식(`CalcMethod`)을 해석하고 단계별로 실행하여 최종 점수를 산출하는 로직 구현.
  - 다양한 계산 메서드(가중 합산, 조건부 계산, 변환표 적용 등)를 처리.

- **랜덤 점수 생성 유틸리티 (`utils/random-score-generator.ts`):**
  - 시뮬레이션 초기값 또는 재시뮬레이션을 위한 랜덤 점수 생성 기능 구현.
  - 점수 범위 및 타입(원점수, 등급 등)에 따른 설정(`random-score-config.ts`) 적용.

- **스코어링 설정 상수 (`constants/scoring-config.ts`):**
  - 시뮬레이션에 필요한 점수 체계, 과목별 설정 등 공통 상수 정의.
