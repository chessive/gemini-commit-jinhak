[APPLY-667] feat(jinhak-cash): 가상계좌 DTO, 인터페이스 및 Member 서비스 확장

- 외부 가상계좌 서버와 통신하기 위한 `VirtualAccountServerRequest/Response` 인터페이스를 정의하여 데이터 형식을 명확히 합니다.
- 가상계좌 생성 요청(`CreateVirtualAccountRequestDto`)에 대한 데이터 유효성 검증을 추가합니다.
  - 은행 코드: 지원하는 9개 은행 코드 여부 확인
  - 휴대폰 번호: `010-0000-0000` 형식 준수 여부 확인
- `MemberRepository`에 `getMemberNameById` 메서드를 추가하여 데이터베이스에서 직접 사용자 이름을 조회하는 기능을 구현합니다.
- `MemberService`에 `getMemberName` 메서드를 추가하여, 서비스 레이어 패턴에 따라 `MemberRepository`를 호출하도록 구현합니다.
- 서비스 간 호출(VirtualAccountService → MemberService) 및 서비스-리포지토리(MemberService → MemberRepository) 아키텍처를 준수합니다.
