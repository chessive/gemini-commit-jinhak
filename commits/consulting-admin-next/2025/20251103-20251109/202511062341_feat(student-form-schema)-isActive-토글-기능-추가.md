feat(student-form-schema): isActive 토글 기능 추가

Student Form Schema 목록 테이블에서 `isActive` 상태를 바로 전환할 수 있는 Switch UI를 추가함.
관리자는 별도 화면이나 DB 작업 없이 활성화 여부를 즉시 변경하고 결과를 확인할 수 있음.

### 주요 변경 사항
- **Mutation 연결**: `schema-list-table.tsx`에 `useUpdateSchema` mutation을 연결하고, Switch 토글 이벤트를 처리하는 `handleActiveToggle` 함수를 추가함.
- **UI 교체**: 기존 Chip 기반의 상태 표시를 MUI `Switch`로 교체하여 `isActive` 상태를 시각적으로 직접 전환할 수 있도록 개선함.
- **중복 토글 방지**: API 요청이 진행 중일 때는 Switch를 `disabled` 처리하여 중복 토글을 방지함.
- **쿼리 무효화 활용**: 기존에 구현된 TanStack Query의 쿼리 무효화 로직을 재활용하여, mutation 성공 시 목록이 자동으로 갱신되도록 함.