[APPLY-790] feat(univ-service): 마감 데이터 연동 및 Smart Loading 전략 구현

- `SPC_Site_UnivList` 프로시저에서 제외된 마감 데이터를 조회하기 위해 `SPC_Site_MagamUnivList` 프로시저를 연동하고, 요청 조건에 따라 데이터 조회를 최적화하는 Smart Loading 전략을 구현함.
- **주요 변경 사항:**
  - **마감 데이터 연동:**
    - `getMagamServiceList` Repository 메서드를 추가하여 마감 전용 프로시저 호출.
    - `fetchMagamServiceListData` Service 메서드를 통해 마감 데이터 캐싱(`UNIV_MAGAM_SERVICE_LIST`) 적용.
  - **Smart Loading 전략:**
    - 클라이언트 요청 상태(`statuses`)에 따라 프로시저 호출을 최적화:
      - 마감만 요청 시: 마감 프로시저만 호출 (일반 조회 건너뜀).
      - 마감 포함 요청 시: 일반/마감 프로시저 병렬 호출 후 병합.
      - 마감 미포함 요청 시: 일반 프로시저만 호출 (기본 동작).
  - **캐시 및 API 확장:**
    - `UNIV_MAGAM_SERVICE_LIST` 캐시 키/TTL 추가 및 Internal API 조회/무효화 지원.
  - **유틸리티 리팩토링:**
    - `getUnivServiceStatusName` 함수가 `StatusOrder` Enum을 직접 사용하도록 개선하여 타입 안전성 확보.
- **테스트:**
  - 마감 데이터 병합, 캐시 히트, Smart Loading 분기 로직에 대한 유닛 테스트 추가.
