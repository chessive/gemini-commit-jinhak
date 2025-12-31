[APPLY-744] feat(internal, home): 내부 캐시 관리 API 구현 및 홈 컨트롤러 리팩토링

- 운영 효율성을 높이기 위해 서버의 HTTP 캐시 및 서비스 메모리 캐시를 조회하고 무효화할 수 있는 내부 API를 구현함.
- **주요 변경 사항:**
  - **캐시 관리 API (`/internal/cache`)**:
    - `GET /:cacheKey`: 특정 캐시 키의 존재 여부와 데이터 조회.
    - `DELETE /:cacheKey`: 특정 캐시 키의 데이터 강제 무효화.
    - `CacheKeyName` Enum을 도입하여 허용된 키(`home-ranking` 등)만 접근 가능하도록 보안 및 타입 안전성 강화.
    - `AdmissionPeriodService`에 `invalidateCache` 메서드를 추가하여 내부 메모리 캐시 제어 지원.
  - **홈 컨트롤러 리팩토링**:
    - `getClickBasedRankings` → `getRankings`로 메서드명을 변경하여 역할(Fallback 포함 통합 랭킹 조회)을 명확히 함.
    - Swagger 문서를 업데이트하여 응답 타입(`ClickBased`/`UnivBased`)을 명시하고 불필요한 스키마 정의 제거.
