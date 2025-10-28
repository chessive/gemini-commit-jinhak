refactor(foundation, prisma): DB 트랜잭션 및 동기화 로직 성능 개선

- `foundation.repository`의 트랜잭션 로직을 개선함
  - `insertRefLibrary`: 트랜잭션 옵션(timeout, isolationLevel)을 명시적으로 설정하여 동시성 및 안정성 향상
  - `deleteAll`: 여러 테이블 삭제 로직을 단일 트랜잭션으로 묶어 원자성 및 성능 보장
  - `syncFoundationFromServer`: 데이터 조회 및 삽입 로직을 `Promise.all`을 사용하여 병렬 처리 방식으로 변경하여 동기화 속도 개선
- `prisma.service`에서 각 Prisma 클라이언트 생성 시 `datasources`를 명시적으로 주입하도록 변경하여 구성의 명확성 강화
