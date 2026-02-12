chore(infra, deps): Node.js 22 LTS 업그레이드 및 관련 의존성 최신화

- **Node.js 런타임 업그레이드 (v20 → v22)**
  - `Dockerfile` 베이스 이미지를 `node:22-alpine`으로 변경하여 최신 LTS 환경 적용
  - `@types/node`를 v22.0.0으로 업데이트하여 TypeScript 타입 호환성 확보
- **의존성 잠금 파일 업데이트**
  - `@types/node` 업데이트에 따른 `package-lock.json` 및 `undici-types` 등 하위 의존성 트리 갱신