feat(chart-setting): 차트 복제 기능 추가

`consulting-admin-next` 프로젝트에 차트 설정을 복제하는 기능 추가함.
이 기능을 통해 관리자는 이전 서비스의 차트 데이터를 현재 서비스로 쉽게 복제 가능함.

### 주요 변경 사항
- **API 연동**: `POST /app-setup/duplicate/chartdata` 엔드포인트를 추가하고 연동함.
- **상태 관리**: TanStack Query의 `useMutation` 훅을 사용하여 차트 복제 API 호출 및 상태를 관리함.
- **UI 컴포넌트**:
  - `dup-chart-button.tsx`: 차트 복제 버튼 (MUI Chip 사용) 구현.
  - `dup-dialog.tsx`: 차트 복제 메인 다이얼로그 구현.
  - `dup-dialog-content.tsx`: 다이얼로그 본문 (서비스 선택 드롭다운, 안내 메시지) 구현.
  - `dup-dialog-actions.tsx`: 다이얼로그 액션 (취소/복제/확인 버튼, 2단계 확인 로직) 구현.
  - `select-service.tsx`: 서비스 선택 컴포넌트 (MUI Autocomplete 사용, 연도별 그룹화) 구현.
- **메인 컨테이너 통합**: `chart-setting-container.tsx`에 복제 기능 UI를 통합함.
- **에러 핸들링**: API 에러 및 사용자 입력에 대한 검증 로직과 토스트 메시지를 구현함.
- **타입 안전성**: `ApiError` 타입 개선 및 TypeScript strict mode를 준수함.
- **성능 최적화**: `useMemo`를 활용하여 서비스 목록 정렬 재실행을 방지함.
- **접근성 개선**: Dialog에 `aria-labelledby` 및 `DialogTitle`에 `id`를 추가하여 접근성을 향상함.

### 의사결정
- **패턴 재사용**: `flutter-setting`의 복제 기능 패턴을 재사용하여 UI/UX 일관성을 유지하고 개발 시간을 단축함.
- **컴포넌트 분리**: `page-dup-chart/` 디렉토리로 컴포넌트를 분리하여 기능별 모듈화 및 재사용성을 높임.

### 코드 리뷰 및 개선
- `ApiError` 타입의 `any` 사용을 구체적인 타입으로 변경하여 타입 안전성을 확보함.
- 에러 메시지가 없을 경우 폴백 메시지를 제공하여 사용자 경험을 개선함.
- 다이얼로그 닫을 때 선택한 서비스 상태가 초기화되도록 하여 UX를 개선함.
- `useMemo`를 사용하여 불필요한 재연산을 방지하고 성능을 최적화함.
- ARIA 속성을 추가하여 웹 접근성을 향상함.