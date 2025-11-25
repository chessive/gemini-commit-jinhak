[APPLY-654] fix(clarity): GTM 위임을 통한 Clarity 중복 초기화 및 unshift 에러 해결

- GTM과 애플리케이션 코드 간의 충돌로 발생하던 Clarity 중복 주입(CL001) 및 `unshift` 에러를 해결함.
- **주요 변경 사항**:
  - `ClarityProvider`에서 `Clarity.init()` 직접 호출 로직을 완전히 제거하고, 초기화 주체를 GTM에 전적으로 위임함.
  - GTM이 Clarity 스크립트를 로드하고 `window.clarity.q`가 생성될 때까지 대기(Polling)하는 모니터링 로직을 추가하여 Race Condition을 방지함.
  - GTM 로드 지연을 대비한 10초 타임아웃을 설정하여 안정성을 높임.
  - `global.d.ts`의 `window.clarity` 타입에 `q` 속성을 추가하여 타입 안전성을 강화함.
- 이를 통해 GTM과의 충돌 없이 안정적으로 Clarity를 운영할 수 있게 됨.
