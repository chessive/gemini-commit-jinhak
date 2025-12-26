feat(error-logging): 앱 안정성 향상을 위한 에러 로깅 시스템 구축

앱 전반의 안정성을 높이고 잠재적인 버그를 선제적으로 추적하기 위해, 에러를 수집하고 서버로 전송하는 포괄적인 에러 로깅 시스템을 구현함.

### 주요 변경 사항

- **1. 핵심 서비스 및 모델 구현:**
  - **`ErrorLogService` (Singleton):** 에러를 캡처하고, 디바이스/앱/OS 정보를 보강하여, 로컬 DB에 저장한 후 서버로 전송하는 중앙 서비스.
  - **`ErrorLog` 모델 (`models/error_log.dart`):** 에러 정보를 구조화한 데이터 모델. `JsonSerializable`을 통해 직렬화/역직렬화 기능을 구현하고, 스택 트레이스 크기 제한 로직을 포함.
  - **`ErrorType` Enum:** 네트워크, DB, 계산 오류 등 에러 유형을 체계적으로 분류.

- **2. 로컬 캐싱 및 재시도 메커니즘 (견고성):**
  - **SQLite 통합 (`data/sql_api.dart`):** `ErrorLog` 테이블을 추가하여, 네트워크가 불안정하거나 오프라인일 때 에러 로그를 로컬에 안전하게 보관.
  - **재시도 로직:** 앱 시작 시 `SplashScreen`에서 `retryUnsentLogs`를 호출하여, 이전에 전송 실패한 로그들을 일괄(batch) 재전송하는 메커니즘을 구현.
  - **데이터 관리:** 30일이 지난 오래된 로그나 재시도 횟수를 초과한 로그를 자동으로 삭제하는 `cleanupOldLogs` 기능 추가.

- **3. 서버 통신 API 구현:**
  - **`ErrorLogApi` (`data/error_log_api.dart`):** 단일 에러와 다중 에러(batch)를 각각 서버로 전송하는 API 클라이언트 구현.
  - **엔드포인트 추가:** `/error-logs`, `/error-logs/batch` 엔드포인트를 `api_endpoints.dart`에 추가.

- **4. 앱 초기화 단계 에러 캡처:**
  - **`SplashScreen` 통합:** 앱 초기화 과정에서 발생하는 모든 예외(`try-catch`)를 `ErrorLogService`로 캡처하도록 로직을 수정하여, 가장 치명적인 초기화 단계의 오류를 추적할 수 있도록 함.

- **5. 의존성 추가 (`pubspec.yaml`):**
  - 로그 ID 생성을 위한 `uuid`와 앱 버전 정보 조회를 위한 `package_info_plus` 라이브러리를 추가.
