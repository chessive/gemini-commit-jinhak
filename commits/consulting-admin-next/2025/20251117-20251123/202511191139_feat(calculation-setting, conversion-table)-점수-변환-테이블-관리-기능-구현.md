feat(calculation-setting, conversion-table): 점수 변환 테이블 관리 기능 구현

계산식 설정 관리 페이지에 점수 변환 테이블(Conversion Table)을 관리하는 기능을 구현함.

### 주요 변경 사항

- **점수 변환 테이블 탭 UI 구현 (`conversion-table-tab/`):**
  - `ConversionTableList`: 변환 테이블 목록을 표시하고, 추가/수정/삭제 및 다른 서비스에서 가져오기 기능을 제공하는 메인 컴포넌트.
  - `ConversionTableForm`: 새로운 변환 테이블을 생성하거나 기존 테이블을 수정하는 폼 컴포넌트. 폼 기반 편집과 JSON 직접 편집(`JsonEditor`)을 지원하며, `ScoreConversionJSON` 구조를 시각적으로 관리할 수 있도록 함.
  - `ConversionTableTab`: 탭 컨텐츠로 `ConversionTableList`를 렌더링.
- **CRUD API 연동을 위한 TanStack Query Hooks 추가:**
  - `useCreateConversionTableMutation`: 변환 테이블 생성 API 연동.
  - `useUpdateConversionTableMutation`: 변환 테이블 수정 API 연동.
  - `useDeleteConversionTableMutation`: 변환 테이블 삭제 API 연동.
  - `useGetCalcConversionTableQuery`: 변환 테이블 목록 조회 API 연동.
- **API 인터페이스 업데이트:**
  - `create-conversion-table.ts`, `update-conversion-table.ts`: `requestBody`를 인자로 받도록 변경하여 폼 데이터를 API 요청 본문에 포함.
  - `delete-conversion-table.ts`: `serviceID`와 `tableID`를 인자로 받도록 변경하여 특정 테이블을 삭제할 수 있도록 수정.
  - `api-urls.ts`: `deleteConversionTable` API URL 정의를 수정하여 `serviceID`와 `tableID`를 포함하도록 변경하고, 오타 (`deleeteConversionTable` -> `deleteConversionTable`)를 수정.
