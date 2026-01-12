chore(config): 프로덕션 환경 리소스 조정 및 YAML 포맷팅

- `apply-mobile-next` 서비스 CPU 리소스 제한 상향 조정
  - Limit CPU: 800m → 1200m
- `apply-mobile-next-server` 인스턴스 규모 및 리소스 최적화
  - Replica Count: 5 → 3
  - Request CPU: 800m → 500m
  - Limit Memory: 1200Mi → 1536Mi
- 설정 파일(`prod-applications-values.yaml`) 내 문자열 인용부호 표준화 (Single Quote → Double Quote)
