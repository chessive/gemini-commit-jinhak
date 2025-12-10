fix(scoring): 탐구 과목 수에 따른 제2탐구 타입(`res2Type`) 초기화 로직 수정

`CustomConfig`의 탐구 과목 설정(`count`)에 따라 `res2Type`의 초기화 및 기본값 설정 로직을 제어하도록 수정함.

- **InputScore 모델 수정:** `resCount`가 2개 이상일 때만 저장된 `res2Type`을 불러오고, 1개일 경우 강제로 `ResearchType.none`으로 설정하여 데이터 무결성을 보장함.
- **CalculateScreen 초기화 수정:** 화면 진입 시 탐구 과목 수가 2개 이상인 경우에만 `res2Type`의 기본값을 설정하도록 조건을 추가함.
