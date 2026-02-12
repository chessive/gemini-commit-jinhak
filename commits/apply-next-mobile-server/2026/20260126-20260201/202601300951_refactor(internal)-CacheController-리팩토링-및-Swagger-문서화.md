refactor(internal): CacheController 리팩토링 및 Swagger 문서화

- `CacheController`의 에러 처리 패턴을 표준화하고, Swagger 문서를 상수화하여 유지보수성과 가독성을 향상시킴.
- **주요 변경 사항:**
  - **에러 처리 표준화:** HTTP 200 응답 내에서 성공 여부를 반환하던 방식을 `BadRequestException` 및 `InternalServerErrorException`을 던지는 표준 예외 처리 방식으로 전환함.
  - **문서화 개선:** Swagger 설정 및 응답 예시를 별도 상수 파일로 분리하고, K3S 다중 Pod 환경에서의 인메모리 캐시 동작 방식 및 주의사항을 상세히 기술함.
  - **타입 안전성 강화:** `CacheStatusResponseDto`의 데이터 타입을 `unknown`으로 개선하여 불필요한 타입 캐스팅을 제거함.
  - **단위 테스트 추가:** `cache.controller.spec.ts`를 통해 캐시 상태 조회, 무효화, 예외 처리 등 핵심 로직에 대한 검증을 완료함 (12개 테스트 통과).
