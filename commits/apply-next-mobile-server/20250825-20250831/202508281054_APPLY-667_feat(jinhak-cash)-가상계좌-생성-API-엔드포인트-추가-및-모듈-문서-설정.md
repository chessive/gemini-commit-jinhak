[APPLY-667] feat(jinhak-cash): 가상계좌 생성 API 엔드포인트 추가 및 모듈/문서 설정

- `POST /jinhak-cash/virtual-accounts` 엔드포인트를 추가하여 가상계좌 생성 기능을 외부에 노출하고, 성공 시 `201 Created`를 반환합니다.
- 발생 가능한 모든 예외 케이스(400, 401, 404, 408, 500, 502 등)에 대한 상세한 Swagger 문서를 작성하여 API 명세와 사용성을 강화합니다.
- `JinhakCashModule`에 `HttpModule`을 30초 타임아웃으로 등록하여 외부 API 연동을 설정합니다.
- `virtual-account.swagger.constant.ts` 파일을 추가하여 Swagger 관련 상수를 분리하고, 컨트롤러의 가독성을 높입니다.
- `ErrorCode` Enum을 사용하여 오류 응답의 타입 안정성과 일관성을 확보합니다.
- `Dockerfile`에 `VIRTUAL_ACCOUNT_AES_ENCRYPTION_KEY`를 빌드 ARG 및 ENV로 추가하여 배포 환경에 대응합니다.
