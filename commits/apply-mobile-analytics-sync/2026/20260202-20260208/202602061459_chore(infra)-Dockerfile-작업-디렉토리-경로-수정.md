chore(infra): Dockerfile 작업 디렉토리 경로 수정

- 컨테이너 내부 작업 디렉토리를 `/app`에서 `/apply-mobile-analytics-sync`로 변경하여 프로젝트 명과 일치시킵니다.
- 빌드 및 프로덕션 스테이지의 `COPY` 경로를 수정된 작업 디렉토리에 맞게 업데이트합니다.