feat(detail-page-setting): 상세페이지 복제 기능 구현

상세페이지 설정 페이지에 "이전 서비스 설정 복제하기" 기능을 추가함.
이 기능을 통해 관리자는 이전 서비스의 상세페이지 데이터를 현재 서비스로 쉽게 복제 가능함.

### 주요 변경 사항
- **API 연동**: `POST /app-setup/detailpage/duplicate` 엔드포인트를 추가하고 연동함.
- **상태 관리**: TanStack Query의 `useMutation` 훅을 사용하여 상세페이지 복제 API 호출 및 상태를 관리함.
- **UI 컴포넌트**:
  - `dup-detailpage-button.tsx`: 복제 버튼 (MUI Chip 사용) 구현.
  - `dup-dialog.tsx`: 복제 메인 다이얼로그 구현 (2단계 확인 프로세스 포함).
  - `select-service.tsx`: 공용 `ServiceSelector` 컴포넌트를 재사용하여 서비스 선택 UI 구현.
- **메인 컨테이너 통합**: `detail-page-setting-container.tsx`에 복제 기능 UI를 통합함.
- **에러 핸들링**: 3단계 fallback (response.message → response.errorMessages → 기본 메시지) 에러 핸들링 로직 구현.
- **사용자 경험 개선**: 로딩 상태, 동적 버튼 텍스트, 중복 클릭 방지 로직 추가.

### 의사결정
- **패턴 재사용**: `chart-setting`의 복제 기능 패턴을 재사용하여 UI/UX 일관성을 유지하고 개발 시간을 단축함.
- **공용 컴포넌트 재사용**: `ServiceSelector` 공용 컴포넌트를 사용하여 코드 중복을 방지하고 일관된 UI/UX를 제공함.
- **버튼 스타일 통일**: `AddNewDataButton`과 동일한 `color="info"` 속성을 사용하여 UI 일관성을 유지함.

### 코드 리뷰 및 개선
- **버튼 비활성화 로직 수정**: `!selectedService || isLoading`으로 수정하여 2단계 확인 시 버튼 활성화 오류 해결.
- **로딩 상태 추가**: `isLoading` state 및 `try-catch-finally` 패턴을 적용하여 중복 클릭을 방지하고 사용자에게 진행 상황을 명확히 표시함.
- **동적 버튼 텍스트**: "다음", "복제", "복제 중..."으로 버튼 텍스트를 동적으로 변경하여 사용자에게 명확한 액션을 안내함.
- **에러 후 다이얼로그 처리**: 에러 발생 시 확인 화면으로 돌아가 재시도를 가능하게 함.