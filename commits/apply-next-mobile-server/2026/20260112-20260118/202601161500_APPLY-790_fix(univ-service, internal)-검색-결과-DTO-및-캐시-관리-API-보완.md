[APPLY-790] fix(univ-service, internal): 검색 결과 DTO 및 캐시 관리 API 보완

- 마감 데이터 연동 작업의 후속 조치로, 검색 결과 DTO의 상태 필드 타입을 최신화하고 Internal API에서 누락된 마감 목록 캐시 관리를 보완함.
- **주요 변경 사항:**
  - **DTO 최신화 (`SearchUnivServiceDto`):**
    - `UnivListItemDto`의 `status` 필드 타입을 `SearchUnivServiceStatus`에서 `StatusOrder` Enum으로 변경하여 프로시저 반환값과 일치시킴.
    - Swagger 문서 설명을 업데이트하여 상태 값의 의미를 명확히 함.
  - **Internal API 보완 (`CacheController`):**
    - `UNIV_MAGAM_SERVICE_LIST` 캐시 키에 대한 상태 조회 및 무효화 로직을 추가하여 관리 기능을 완성함.
    - Swagger 문서에 캐시 키별 TTL 정보를 구체적으로 명시함 (정각 동기화 등).
