refactor(home): Swagger 문서화 완성 및 비즈니스 로직 분리

- `HomeController`의 Swagger 문서를 상수 파일로 분리하여 완성도를 높이고, 컨트롤러에 있던 필터링 로직을 서비스 레이어로 이동시켜 코드 품질을 개선함.
- **주요 변경 사항:**
  - **Swagger 문서화:**
    - `home.swagger.constant.ts` 확장 및 `home.examples.constant.ts` 신규 생성.
    - Examples 드롭다운 활성화 및 Query Parameter 상세 문서화 적용.
    - `isArray: true` 옵션 추가로 배열 응답 스키마 정확성 확보.
  - **코드 품질 개선:**
    - 컨트롤러의 DTO 수정 로직을 `UnivService.normalizeHomeUniversitiesFilter`로 이동하여 DTO 불변성 보장.
    - `NormalizedHomeUniversitiesFilter` 인터페이스를 정의하여 내부 필터링 타입 안전성 강화.
    - 컨트롤러 코드를 단순 위임 형태로 리팩토링 (22줄 → 3줄).
  - **기타:** `smb-test.controller.ts` import 순서 정리.
