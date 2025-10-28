refactor(admin, foundation): AdminService의 N+1 쿼리 문제 해결 및 성능 최적화

- `AdminService.findServiceList()` 메서드에서 발생하는 N+1 쿼리 문제를 해결하여 DB Connection Pool 고갈 및 응답 시간 저하 문제를 방지함.
- **Before**: 루프 내에서 `findSerialNo`, `getIsNewServiceDetail`을 개별 호출하여 서비스 목록 수(N)에 따라 총 `1+2N`개의 쿼리가 발생함. (예: 50개 목록 조회 시 101개 쿼리, 약 5초 소요)
- **After**: `Promise.all`과 `IN` 절을 활용한 Batch 조회 방식으로 변경하여 전체 쿼리 수를 3개로 최적화함. (예상 응답 시간: 약 150ms)

- **주요 변경사항**:
  - `foundation.repository.ts`: `findSerialNosByServiceIDs` 메서드를 추가하여 여러 서비스의 시리얼 번호를 일괄 조회함.
  - `admin.repository.ts`: `findServiceDetailsByServiceIDs` 메서드를 추가하여 여러 서비스의 `isNew` 상태를 일괄 조회함.
  - `admin.service.ts`: `findServiceList` 로직을 리팩토링하여, Batch로 가져온 데이터를 `Map` 자료구조에 저장하고 메모리에서 조합함으로써 O(1) 조회 성능을 확보함.

- **기대 효과**:
  - 쿼리 수 97% 감소 (101개 → 3개)
  - 예상 응답 시간 96% 단축 (~5초 → ~150ms)
  - DB 커넥션 사용량 안정화