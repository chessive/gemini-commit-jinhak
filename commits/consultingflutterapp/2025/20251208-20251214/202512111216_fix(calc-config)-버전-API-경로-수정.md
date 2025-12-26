fix(calc-config): 버전 체크 API의 serviceId를 Path Parameter로 변경

동적 계산 설정(Calc-Config) 버전 조회 API 호출 시, `serviceId`를 Query Parameter로 전달하던 방식을 Path Parameter로 전달하도록 수정함.

- **문제점**:
  - 기존에는 `GET /calc-config/version?serviceId=...` 형태로 `serviceId`를 쿼리 파라미터로 전송했음. 이는 다른 API들의 경로 기반 식별 방식과 일관성이 부족하고, 향후 게이트웨이 등에서 라우팅 규칙을 복잡하게 만들 수 있는 잠재적 문제가 있었음.

- **변경 사항**:
  - **`api_endpoints.dart`**:
    - `calcConfigVersion`을 `static const String`에서 `serviceId`를 경로에 포함하는 `static getter`로 변경함 (`/calc-config/version/{serviceId}`).
  - **`consulting_api.dart`**:
    - `fetchCalcConfigVersion` 메서드에서 불필요해진 `queryParameters`를 제거하여 API 호출 방식을 경로 파라미터 방식에 맞게 수정함.

- **기대 효과**:
  - API의 리소스 식별 방식이 RESTful 원칙에 더 부합하도록 개선됨.
  - 서비스별 컨텍스트에 따라 명확하게 버전을 조회할 수 있어 다중 서비스 환경에서의 안정성이 향상됨.
