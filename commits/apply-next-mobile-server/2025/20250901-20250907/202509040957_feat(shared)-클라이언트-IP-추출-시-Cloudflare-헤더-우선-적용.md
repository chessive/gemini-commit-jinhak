feat(shared): 클라이언트 IP 추출 시 Cloudflare 헤더 우선 적용

- `extractClientIp` 유틸리티 함수의 IP 주소 추출 로직을 개선합니다.
- Cloudflare 환경에서 실제 클라이언트 IP를 더 정확하게 식별하기 위해, `CF-Connecting-IP` 헤더를 최우선으로 확인하도록 변경합니다.
- 변경된 IP 추출 우선순위: `CF-Connecting-IP` > `X-Forwarded-For` > `X-Real-IP` > `request.ip`
