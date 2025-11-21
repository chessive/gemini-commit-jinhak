feat(calculation-setting): 계산 방법(CalcMethod) Step Editor UI 개선

계산 방법 설정 내 Step Editor의 사용자 경험(UX)을 개선함.

- **`Autocomplete` 컴포넌트 도입**:
  - 기존 텍스트 입력 방식의 '계산 방법' 필드를 데이터 기반 `Autocomplete` 컴포넌트로 대체함.
  - 사용자는 드롭다운에서 미리 정의된 '계산 방법' 목록과 설명을 확인하고 선택할 수 있게 됨.

- **API 연동**:
  - `getCalcMethodDefinition` API 함수 및 `useGetCalcMethodDefinitionQuery` 훅을 추가하여 서버로부터 계산 방법 정의 목록을 동적으로 가져옴.
  - API 로딩 및 오류 상태 처리를 `step-editor.tsx`에 구현하여 견고성을 높임.

- **타입 및 상수 정의**:
  - `CalcMethodDefinition` 타입을 추가하여 서버 응답 데이터 구조에 대응함.
  - 관련 API 엔드포인트(`api-urls.ts`) 및 `react-query` 캐싱 키(`query-keys.ts`)를 업데이트함.

이 변경을 통해 '계산 방법' 설정 과정의 효율성과 정확성을 높임.
