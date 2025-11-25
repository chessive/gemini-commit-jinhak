[APPLY-654] refactor(clarity): Clarity 초기화 로직 클라이언트 측으로 분리

- Clarity 스크립트가 SSR 환경에서 실행되는 것을 방지하고, 클라이언트 측에서만 안전하게 초기화되도록 로직을 개선함.
- **ClarityProvider 구현**:
  - `useEffect`를 사용하여 클라이언트에서만 Clarity를 초기화하는 `ClarityProvider` 컴포넌트를 신규 생성함.
  - `layout.tsx`에 `ClarityProvider`를 적용하여 기존 초기화 로직을 대체함.
