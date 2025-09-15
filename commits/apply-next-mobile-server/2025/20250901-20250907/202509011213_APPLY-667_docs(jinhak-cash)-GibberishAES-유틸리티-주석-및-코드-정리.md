[APPLY-667] docs(jinhak-cash): GibberishAES 유틸리티 주석 및 코드 정리

- `gibberish-aes.util.ts` 파일의 가독성을 개선하기 위해 주석을 간소화하고 사용하지 않는 코드를 제거합니다.
- 주요 변경 사항:
  - JSDoc 파라미터 설명 등 불필요한 주석을 제거하여 코드를 간결하게 만듭니다.
  - 프로덕션 환경에서 사용되지 않는 `validateKey` 및 `testEncryption` 테스트용 메서드를 삭제합니다.
- 이 변경은 코드의 핵심 암호화 로직에는 영향을 주지 않습니다.
