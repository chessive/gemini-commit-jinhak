fix(docker): API_UNI_RATIO_URL 환경변수 추가 및 빌드 인자 반영

- `Dockerfile`에 `API_UNI_RATIO_URL` 빌드 인자(ARG) 및 환경변수(ENV) 설정 추가
  - 빌드 시점에 API URL을 주입받아 컨테이너 실행 환경에서 사용할 수 있도록 수정
- `CHANGELOG.md` 업데이트
