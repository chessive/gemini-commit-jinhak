[APPLY-667] refactor(jinhak-cash): 가상계좌 휴대폰 번호 형식 변환 및 유효성 검증 개선

- API 요청 시 휴대폰 번호 형식을 하이픈이 없는 11자리 숫자(01000000000)로 변경하여 클라이언트 편의성을 개선합니다.
  - `CreateVirtualAccountRequestDto`: 휴대폰 번호 유효성 검증 로직을 `^010\d{8}$` 패턴으로 수정하고, 관련 DTO 내 헬퍼 메서드를 제거합니다.
  - `virtual-account.swagger.constant.ts`: API 문서의 휴대폰 번호 형식 설명을 `01000000000`으로 업데이트합니다.
- `shared/utils/converter.util.ts`에 `formatMobile` 유틸리티 함수를 추가하여, 서비스 레이어로 전달하기 전에 하이픈이 포함된 형식(010-0000-0000)으로 변환합니다.
- `VirtualAccountController`: `formatMobile` 함수를 적용하여, 서비스가 기존 외부 시스템과 일관된 데이터 형식을 사용하도록 보장합니다.
