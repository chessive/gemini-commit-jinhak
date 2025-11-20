feat(provider): 계산 설정 로딩 및 캐싱을 위한 Provider/API 통합

동적 계산 시스템의 설정을 앱에 통합하기 위해 API 통신 및 Provider(상태 관리) 계층을 구현함. (Phase 6)

### 주요 변경 사항

- **API 계층 구현 (`consulting_api.dart`, `api_endpoints.dart`):**
  - `calcConfig` 및 `calcConfigVersion` 엔드포인트를 `ApiEndpoints`에 추가함.
  - `ConsultingApi`에 `fetchCalcConfig()`와 `fetchCalcConfigVersion()` 메소드를 구현하여 서버로부터 전체 계산 설정과 버전 정보를 비동기적으로 가져오는 기능을 추가함.

- **Provider(상태 관리) 통합 (`consulting_store.dart`):**
  - `ConsultingStore`에 계산 설정(`_calcConfigCache`), 계산 메소드(`_calcMethodConfigCache`), 변환 테이블(`_conversionTablesCache`)을 저장하기 위한 3개의 메모리 캐시를 추가함.
  - `loadCalcConfig()`: API를 통해 가져온 설정을 메모리 캐시에 저장하는 핵심 로직을 구현함.
  - `checkCalcConfigVersion()`: 서버와 로컬 캐시의 버전을 비교하는 로직의 기반을 마련함.
  - `getCalcMethodConfig()`: 특정 계산 케이스에 맞는 설정을 캐시에서 조회하는 편의 메소드를 추가함.

- **앱 시작 시 버전 체크 로직 추가 (`splash_screen.dart`, `splash_service.dart`):**
  - `SplashScreen`이 로드될 때 `SplashService`의 `initCalcConfig()`를 호출하여, 앱 시작과 동시에 백그라운드에서 '조용한 업데이트' 방식으로 계산 설정 버전을 체크하도록 구현함.
