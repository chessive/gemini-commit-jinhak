fix(foundation): Foundation 데이터 동기화 시 ApplyMajor 테이블 FK 의존성 처리 추가

- ApplyMajor 테이블이 SATScoreCalcCase를 외래 키(FK)로 참조함에 따라, 동기화 순서 보장을 위해 순차 처리 로직에 포함
  - 기존 병렬 처리 대상에서 제외하고 `tablesWithFkDependency` 배열로 이동하여 SATScoreCalcCase 이후에 처리되도록 보장
  - 데이터 동기화 시 발생할 수 있는 외래 키 제약 조건 위반(Foreign Key Constraint Violation) 오류 해결
- 변수명 변경: `scoringTablesWithFkDependency` → `tablesWithFkDependency`
  - Scoring 모듈에 국한되지 않고 다양한 의존성을 가진 테이블을 포괄하도록 변수명 개선
