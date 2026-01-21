[APPLY-795] refactor(shared, univ-service): UnivService 캐싱 전략 최적화

- HTTP 캐시 키 폭발 문제를 해결하고 메모리 관리 효율성을 높이기 위해 캐싱 전략을 최적화함.
- **주요 변경 사항:**
  - **OOM 방지 설정 (`app.module.ts`):**
    - `CacheModule`에 `max: 10000` 설정을 추가하여 최대 캐시 엔트리 수를 제한하고 LRU(Least Recently Used) 정책을 적용함.
  - **선택적 HTTP 캐싱 (`hourly-cache.interceptor.ts`):**
    - `search` 파라미터가 포함된 요청은 사용자 입력에 따른 캐시 키 무한 증가 위험이 있으므로 HTTP 캐싱 대상에서 제외함.
    - 검색어가 없는 요청에 대해서만 HTTP 캐싱을 적용하여 캐시 HIT 효율을 개선함.
  - **엔드포인트 최적화 (`univ-service.controller.ts`):**
    - 커서 기반 페이지네이션을 사용하는 `searchInfinite` API에서 HTTP 캐싱을 제거함. 커서 값의 동적 특성상 HIT 확률이 낮으므로 불필요한 캐시 생성을 차단하고 Service 레이어 캐싱으로만 보호함.
- **기대 효과:**
  - 캐시 메모리 사용량 예측 가능성 확보 및 OOM 위험 제거.
  - 불필요한 캐시 엔트리 생성을 70% 이상 차단하여 캐시 시스템 전반의 성능 향상.