[APPLY-670] refactor(jinhak-cash): 가상계좌 컨트롤러 분리

- 기존 JinhakCashController에 있던 가상계좌 조회 API를 VirtualAccountController로 분리
  - 관심사 분리를 통해 코드 구조를 개선하고 향후 확장성을 확보
- 신규 VirtualAccountController 추가
  - `GET /jinhak-cash/virtual-accounts` 엔드포인트 이전
  - Swagger API 태그를 'VirtualAccount'로 명시하여 문서 분리
- JinhakCashController 변경
  - 기존 getVirtualAccounts 메서드 및 관련 의존성(VirtualAccountService) 제거
- JinhakCashModule 업데이트
  - 신규 생성된 VirtualAccountController를 모듈에 등록
