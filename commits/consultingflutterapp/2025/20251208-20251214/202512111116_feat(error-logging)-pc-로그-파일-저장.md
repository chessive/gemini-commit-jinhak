feat(error-logging): PC 환경 에러 로그 파일 저장 기능 추가

PC(Windows) 환경에서 발생하는 에러를 손쉽게 확인하고 디버깅할 수 있도록, 기존 `ErrorLogService`에 에러 로그를 로컬 텍스트 파일로 저장하는 기능을 추가함.

### 주요 변경 사항

- **에러 로그 파일 저장 기능 (`_saveToFile`):**
  - PC 플랫폼에서 에러 발생 시, `ErrorLog` 객체의 모든 정보를 포함하는 상세 로그를 텍스트 파일에 기록하도록 `ErrorLogService`를 확장함.
  - 이 기능은 보조적인 디버깅 수단으로, 파일 저장 실패 시에도 기존의 SQLite 캐싱 및 서버 전송 로직에는 영향을 주지 않도록 `try-catch`로 안전하게 처리됨.

- **로그 파일 경로 및 형식:**
  - **저장 위치**: `[사용자 문서 폴더]/jinhakapply/consulting/{serviceName}/logs/`
  - **파일명**: 월별로 자동 생성됨 (예: `error_logs_2025-12.txt`).
  - **저장 방식**: 기존 로그에 새로운 로그를 추가하는 방식(`FileMode.append`)을 사용함.

- **가독성 높은 로그 포맷 (`_formatErrorLogAsText`):**
  - 타임스탬프, 환경 정보(OS, 디바이스), 서비스 정보(앱 버전, DB 버전), 에러 메시지, 스택 트레이스 등 모든 정보를 명확한 섹션으로 구분하여 가독성을 극대화함.
  - JSON으로 저장된 `additionalData`는 `pretty-print` 형식으로 변환하여 쉽게 분석할 수 있도록 함.
