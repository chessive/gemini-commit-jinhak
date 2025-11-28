chore(node): Node.js 런타임 및 의존성 패키지 24 버전으로 업그레이드

- 프로젝트의 런타임 환경을 Node.js 22에서 24(LTS)로 업그레이드하여 성능 및 안정성을 개선함.
- **주요 변경 사항**:
  - `Dockerfile`: 기반 이미지를 `node:22-alpine`에서 `node:24-alpine`으로 변경함.
  - `package.json`: `npm-check-updates`를 사용하여 의존성 패키지들을 최신 마이너/패치 버전으로 업데이트함 (Next.js, React-Query, TypeScript 등).
  - `_common.scss`: Sass 버전 변경에 따라 `unquote()` 함수를 `string.unquote()`로 수정함.
  - 기타 타입 오류 수정: TypeScript 버전 업에 따른 타입 불일치 문제를 해결함.
