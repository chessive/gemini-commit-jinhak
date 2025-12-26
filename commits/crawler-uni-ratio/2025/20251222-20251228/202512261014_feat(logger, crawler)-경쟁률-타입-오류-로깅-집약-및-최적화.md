feat(logger, crawler): 경쟁률 타입 오류 로깅 집약 및 최적화

- 경쟁률(Ratio) 값이 숫자가 아닌 경우 발생하는 로깅 방식을 개별 출력에서 대학별 집약 출력으로 개선
  - 기존: 오류 발생 시마다 `warn` 로그 출력 (대학당 수십 건 발생 시 로그 파일 비대화)
  - 개선: 대학별로 오류를 수집(`RatioTypeError`)하여 크롤링 완료 후 1회 요약 출력 및 상세 로그 별도 저장
- `CustomLoggerService`에 경쟁률 타입 오류 전용 Winston transport 및 전용 메서드 추가
  - `logs/ratio-type-errors/` 디렉토리에 일별 회전 파일로 상세 오류 내역 저장
- `CrawlerDataService`에 오류 수집용 인스턴스 변수(`currentRatioTypeErrors`) 및 집약 로직 구현
  - `PuppeteerInterceptor`의 단일 실행 보장을 전제로 하되, 향후 확장성을 고려한 설계 반영
- 신규 인터페이스 `RatioTypeError` 추가 및 `src/common/interfaces`를 통한 export 구조 정리
