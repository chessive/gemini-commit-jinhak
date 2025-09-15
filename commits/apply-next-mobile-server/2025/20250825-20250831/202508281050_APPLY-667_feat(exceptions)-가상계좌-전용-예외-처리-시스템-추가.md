[APPLY-667] feat(exceptions): 가상계좌 전용 예외 처리 시스템 추가

- 가상계좌 연동 시 발생 가능한 6가지 특정 상황에 대한 ErrorCode를 Enum으로 정의하여 오류 추적을 용이하게 합니다.
  - VIRTUAL_ACCOUNT_MEMBER_NOT_FOUND (404)
  - VIRTUAL_ACCOUNT_CONFIG_ERROR (500)
  - VIRTUAL_ACCOUNT_TIMEOUT (408)
  - VIRTUAL_ACCOUNT_CONNECTION_FAILED (502)
  - VIRTUAL_ACCOUNT_ENCRYPTION_FAILED (500)
  - VIRTUAL_ACCOUNT_ALREADY_EXISTS (400)
- 각 ErrorCode에 매핑되는 커스텀 예외 클래스(virtual-account.exception.ts)를 추가하여, 상황에 맞는 HTTP 상태 코드와 명확한 에러 메시지를 반환하도록 구현합니다.
- 이를 통해 클라이언트가 오류 상황을 더 세분화하여 처리할 수 있도록 지원하고, 디버깅 효율을 높입니다.
