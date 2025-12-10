fix(foundation): Foundation 데이터 동기화 로직 오류 수정 및 기능 보완

- **외래 키(FK) 제약 조건 위반 오류 해결**
  - `syncFoundationFromServer` 메서드 내 테이블 동기화 순서를 FK 의존성에 따라 재정렬
  - 의존성이 없는 테이블들은 `Promise.all`을 사용하여 병렬로 처리하여 성능 유지
  - FK 종속 관계가 있는 Scoring 관련 테이블(`CalcMethodConfig` → `ScoreCalcConfig`)은 순차적으로 동기화하여 데이터 무결성 보장

- **누락된 테이블 동기화 로직 추가**
  - 기존에 삭제만 되고 동기화는 누락되었던 `HSBScoreCalcCaseSub` 테이블을 동기화 및 삭제 로직에 추가하여 데이터 불일치 문제 해결
  - 신규 Scoring 모듈 관련 테이블(`ScoreCalcConfig`, `CalcMethodConfig`, `ScoreConversionTable`)을 동기화 대상에 포함

- **코드 리팩토링 및 안정성 강화**
  - Foundation 동기화용 DTO를 각 테이블에 맞게 신규 생성하고 `index.ts`를 통해 명시적으로 export
  - 비동기 메서드(`syncAppSetupFromServer`)에 `await` 키워드를 추가하여 동기화 작업이 완료되는 것을 보장
  - 중복 호출되던 `syncConfigFromServer` 로직을 제거하여 코드 간소화
