refactor(service-selector): 서비스 선택 컴포넌트 공통화

`flutter-setting`과 `chart-setting` 페이지에 중복 구현된 서비스 선택 로직을 `shared` 레이어로 추출하여 FSD 아키텍처 원칙을 준수하고 코드 재사용성을 향상하는 리팩토링 작업 수행함.

### 배경 및 문제점
- **코드 중복**: 약 120줄의 동일한 로직이 2곳에 존재함.
- **FSD 원칙 위반**: pages 레이어끼리 import 불가 원칙 위반.
- **유지보수 어려움**: 수정 시 여러 파일을 동시에 수정해야 함.
- **확장성 부족**: 3번째 사용처 추가 시 또 다시 중복 코드 생성 우려.

### 주요 변경 사항
- **신규 파일 생성**:
  - `src/shared/models/types/service.ts`: `ServiceOption` 타입 정의.
  - `src/shared/services/service-option-helpers.ts`: 4개 헬퍼 함수 (getOptionLabel 등) 추출.
  - `src/shared/constants/service-selector.ts`: 스타일 상수 정의.
  - `src/shared/components/layouts/dashboard-layout/autocompletes/service-selector.tsx`: 통합 서비스 선택 컴포넌트 구현.
- **기존 파일 수정**: `flutter-setting` 및 `chart-setting` 내 `select-service.tsx` 및 관련 다이얼로그 컴포넌트에서 `shared` 컴포넌트 import 및 사용 방식으로 변경.
- **중복 파일 제거**: `flutter-setting/services/select-service.tsx` 등 중복 코드 제거.

### 의사결정
- **Shared 레이어 선택**: `ServiceSelector`의 낮은 복잡도와 전역 UI 요소 특성을 고려하여 `shared` 레이어에 배치함. 기존 `service-autocomplete` 등과 일관성 유지.
- **컴포넌트 분리 전략**: `ServiceSelector`를 별도 파일로 분리하고 props 기반 커스터마이징을 통해 재사용성 극대화.

### 코드 리뷰 및 개선
- **타입 검증 로직 추가**: `isSusi` 값에 대한 유효성 검증 로직 추가.
- **중복 로직 제거**: `getServiceTypeLabel` 헬퍼 함수를 통해 변환 로직 중복 제거.
- **매직 넘버 상수화**: `CHIP_PADDING_LEFT`, `OPTION_GAP` 등 스타일 관련 매직 넘버 상수화.
- **에러 핸들링 구현**: API 실패, 로딩, 빈 데이터 상태에 대한 처리 로직 추가.
- **접근성 개선**: `aria-label`, `aria-hidden` 속성을 추가하여 스크린 리더 사용자를 위한 접근성 향상.
- **래퍼 컴포넌트 개선**: 도메인별 의미 있는 기본값 제공으로 래퍼 컴포넌트의 존재 정당화.