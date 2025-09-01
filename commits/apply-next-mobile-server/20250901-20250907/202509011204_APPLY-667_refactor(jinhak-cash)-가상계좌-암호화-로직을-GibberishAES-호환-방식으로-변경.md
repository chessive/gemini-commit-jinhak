[APPLY-667] refactor(jinhak-cash): 가상계좌 암호화 로직을 GibberishAES 호환 방식으로 변경

- 레거시 가상계좌 서버와 암호화 호환성을 맞추기 위해, 기존 Node.js `crypto` 기반의 AES 암호화 유틸리티를 `GibberishAES` 라이브러리와 동일하게 동작하는 새로운 유틸리티로 교체합니다.
- 주요 변경 사항:
  - `aes-encryption.util.ts` 삭제 및 `gibberish-aes.util.ts` 신규 추가
  - PBKDF2 키 유도 및 랜덤 Salt/IV 생성을 제거하고, 고정 IV와 패딩된 키를 사용하는 순수 AES-256-CBC 방식으로 변경하여 기존 서버와 호환성을 확보합니다.
- `VirtualAccountService`에서 새로운 `GibberishAES` 유틸리티를 사용하도록 수정합니다.
- 암호화 방식 변경으로 문제가 해결됨에 따라, 이전 커밋에서 추가했던 `JSON.stringify` 및 `Content-Type` 헤더 변경을 원복합니다.
