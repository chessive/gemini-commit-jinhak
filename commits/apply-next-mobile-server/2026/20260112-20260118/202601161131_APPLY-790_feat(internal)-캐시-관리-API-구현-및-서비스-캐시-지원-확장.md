[APPLY-790] feat(internal): 캐시 관리 API 구현 및 서비스 캐시 지원 확장

- 서버 운영 및 디버깅을 위해 HTTP 캐시와 서비스 내부 캐시를 관리할 수 있는 API를 확장함.
- **주요 변경 사항:**
  - **캐시 컨트롤러 구현 (`cache.controller.ts`):**
    - `GET /internal/cache/:cacheKey`: 캐시 상태 조회 API 추가.
    - `DELETE /internal/cache/:cacheKey`: 캐시 강제 무효화 API 추가.
    - 캐시 키 타입(`HTTP_CACHE`, `SERVICE_CACHE`)에 따른 분기 처리 로직 구현.
  - **서비스 캐시 지원 확장:**
    - `UNIV_SERVICE_LIST`, `CATEGORY_TYPE_RESPONSE`, `UNIV_KEYWORDS` 등 신규 서비스 캐시에 대한 조회 및 무효화 기능 추가.
    - `AdmissionPeriodService`에 `invalidateCache` 메서드를 추가하여 외부 요청에 의한 캐시 갱신 지원.
  - **DTO 추가:**
    - `CacheStatusResponseDto`, `CacheInvalidationResponseDto`를 정의하여 일관된 응답 구조 제공.
- **기타 변경:**
  - `InternalModule`에 `CacheController` 등록 및 관련 DTO/컨트롤러 export 설정.