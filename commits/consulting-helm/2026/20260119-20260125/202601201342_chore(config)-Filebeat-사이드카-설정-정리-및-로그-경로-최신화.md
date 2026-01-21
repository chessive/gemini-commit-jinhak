chore(config): Filebeat 사이드카 설정 정리 및 로그 경로 최신화

- consulting-admin-next 및 consulting-admin-server의 Filebeat 사이드카 설정 제거
  - 불필요한 로그 수집 사이드카 및 볼륨 설정 삭제
- consulting-service 로그 경로 변경 및 태그 ID 표준화
  - 로그 경로: `/logs` → `/temp/logs` 변경
  - 식별자: `consulting-server` → `consulting-service`로 변경하여 네이밍 일관성 확보
