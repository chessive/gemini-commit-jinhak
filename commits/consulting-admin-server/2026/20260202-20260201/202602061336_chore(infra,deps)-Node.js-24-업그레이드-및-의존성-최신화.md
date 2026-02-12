chore(infra, deps): Node.js 24 LTS 업그레이드 및 주요 의존성 패키지 최신화

- **Node.js 런타임 업그레이드 (v20 → v24)**
  - `Dockerfile` 및 `bitbucket-pipelines.yml`의 베이스 이미지를 `node:24-alpine`으로 변경하여 최신 LTS 환경 적용
  - `@types/node`를 v24.0.0으로 업데이트하여 TypeScript 타입 호환성 확보

- **주요 의존성 패키지 메이저 업데이트**
  - **mssql (v11 → v12)**: 최신 드라이버 적용 및 성능 개선
  - **ldapts (v7 → v8)**: LDAP 클라이언트 안정성 강화
  - **supertest (v6 → v7)**: 테스트 유틸리티 최신화

- **기타 변경사항**
  - `package-lock.json` 대규모 갱신을 통해 전체 의존성 트리를 최신 상태로 동기화
