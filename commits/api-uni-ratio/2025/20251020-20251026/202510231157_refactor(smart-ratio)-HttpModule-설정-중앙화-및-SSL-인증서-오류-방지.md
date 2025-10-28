refactor(smart-ratio): HttpModule 설정 중앙화 및 SSL 인증서 오류 방지

- `SmartRatioModule`에서 `HttpModule.registerAsync`를 사용하여 `timeout`, `maxRedirects`, `httpsAgent` 등 HTTP 관련 설정을 중앙에서 관리하도록 개선함
- `httpsAgent`에 `rejectUnauthorized: false` 옵션을 추가하여, 개발 환경 등에서 발생할 수 있는 SSL 인증서 관련 오류를 방지함
- `SmartRatioJhService`에서 개별적으로 관리하던 `timeout` 설정을 제거하고, 중앙화된 `HttpModule` 설정을 따르도록 변경하여 코드의 일관성과 유지보수성을 높임
- `SmartRatioJhService`의 API 요청 부분에 `url`과 `payload`를 로깅하는 디버그 코드를 추가하여 문제 해결을 용이하게 함