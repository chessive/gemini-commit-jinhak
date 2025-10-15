refactor(prisma): Prisma 6 마이그레이션 및 코드베이스 린트 적용

- **Prisma 6 마이그레이션**
  - Prisma 관련 패키지(`@prisma/client`, `prisma`)를 `5.21.0`에서 `6.17.1`로 업그레이드했습니다.
  - 모든 환경(dev, test, real)의 Prisma 클라이언트를 v6에 맞게 재생성했습니다.
  - `NotFoundError` 등 주요 Breaking Changes의 영향도를 분석했으며, 코드베이스에 해당 사항이 없어 추가 수정은 필요하지 않았습니다.

- **코드 품질 개선**
  - `npm run lint -- --fix`를 실행하여 전체 코드베이스의 린트 오류를 수정했습니다. (import 순서 정렬, 미사용 import 제거 등)
  - 기본으로 생성되었던 `AppController`와 `AppService`를 제거하여 프로젝트 구조를 정리했습니다.
