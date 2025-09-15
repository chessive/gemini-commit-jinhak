feat(univ-service, shared): 대학 검색 API에 정각 자동 갱신 캐시 적용

- 대학 목록 검색 API(`search-univ-list`)의 응답 속도 및 서버 부하 감소를 위해, 기존 1분 단위 캐싱 전략을 정각마다 자동 갱신되는 캐싱 전략으로 개선합니다.
- 주요 변경 사항:
  - `HourlyCacheInterceptor`를 `shared` 모듈에 신규 추가하여, 재사용 가능한 정각 캐싱 로직을 구현합니다.
    - 캐시 키에 현재 시간(HH)을 포함시켜 매시간 고유한 키를 생성합니다.
    - TTL을 다음 정각까지 남은 시간으로 동적 설정하여, 매시 정각에 캐시가 자동으로 만료되도록 합니다.
  - `time.util.ts` 유틸리티를 추가하여 시간 관련 계산을 캡슐화합니다.
- `UnivServiceController`에 새로운 `HourlyCacheInterceptor`를 적용하여, 데이터 일관성을 유지하면서 캐시 효율을 극대화합니다.
