feat(calc-config): 동적 점수 계산 설정 API 기능 추가

- Prisma 스키마에 `ScoreCalcConfig`, `ScoreCalcMethodConfig`, `ScoreConversionTable` 모델을 추가하여 동적 계산 설정의 기반을 마련함
- `GET /calc-config/:serviceId` 엔드포인트를 통해 서비스별 전체 계산 설정을 정규화된 JSON 형식으로 일괄 제공하는 API를 구현함
- `GET /calc-config/version/:serviceId` 엔드포인트를 통해 설정의 버전, 체크섬, 타임스탬프를 제공하여 클라이언트의 캐시 관리 및 데이터 무결성을 지원함
- `CalcConfig` 모듈(컨트롤러, 서비스, 레포지토리)을 신설하고, `SerialGuard`를 적용하여 인가된 클라이언트만 접근 가능하도록 보안을 강화함
- Helper 함수(`extractConversionTypes`, `generateChecksum`)를 구현하여 서비스 로직의 복잡도를 낮추고 재사용성을 높임
- `.gitignore`에 에이전트 관련 파일을 추가하여 버전 관리에서 제외함
