refactor(calculation-setting): UI 구조를 탭 기반으로 개편

계산식 설정 관리 페이지의 UI 구조를 Dialog 기반에서 탭 기반으로 전면 개편하여 사용자 경험과 확장성을 향상함.

### 주요 변경 사항

- **탭 기반 레이아웃 도입 (`calculation-setting-container.tsx`):**
  - 기존의 `CalculationSettingDialog` 및 `SettingsOverview` 컴포넌트를 제거하고, Material-UI의 `Tabs` 컴포넌트를 사용하여 '점수 변환 테이블', '계산 방법', '계산 설정', '동기화' 탭을 구현함.
  - 각 탭에 해당하는 `ConversionTableTab`, `CalcMethodTab`, `CalcConfigTab` 컴포넌트를 동적으로 렌더링하도록 변경.
- **상태 관리 개선 (`store.ts`):**
  - 전역 상태 관리 (`useCalculationSettingStore`)에서 `dialogType` (Dialog 표시 유형) 대신 `activeTab` (현재 활성화된 탭)을 관리하도록 변경하여 UI 흐름을 탭 구조에 맞게 조정.
- **불필요한 컴포넌트 삭제:**
  - `calculation-setting-dialog.tsx`: 기존의 Dialog 기반 설정 인터페이스를 대체함에 따라 삭제.
  - `settings-overview/` 디렉토리 및 하위 컴포넌트: 기존의 카드 기반 개요 화면을 대체함에 따라 삭제.
