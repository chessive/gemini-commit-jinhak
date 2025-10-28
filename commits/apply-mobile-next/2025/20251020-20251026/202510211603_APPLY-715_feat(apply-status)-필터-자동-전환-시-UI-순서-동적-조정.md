[APPLY-715] feat(apply-status): 필터 자동 전환 시 UI 순서 동적 조정

- '접수중' 데이터가 없어 '접수예정'으로 자동 필터 전환이 발생했을 때, 필터 UI의 순서도 함께 변경하여 사용자 경험을 개선함.
- **주요 변경사항**
  - `apply-status.store.ts`: 필터 자동 전환(폴백) 실행 여부를 전역으로 관리하기 위해 `hasFallbackExecuted` 상태를 추가함.
  - `univ-status-list.tsx`: 필터 자동 전환 시, `setHasFallbackExecuted(true)`를 호출하여 폴백이 실행되었음을 스토어에 기록함.
  - `status-filter.tsx`: 전역 `hasFallbackExecuted` 상태에 따라 필터 목록의 순서를 동적으로 재정렬함. 폴백 실행 후에는 '접수예정' 필터가 목록의 맨 앞에 표시됨.