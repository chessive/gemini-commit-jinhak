[APPLY-793] feat(shared): Offset 커서 및 캐시 타임스탬프 유틸리티 추가

- 무한스크롤 기능의 핵심인 커서 기반 페이지네이션과 캐시 일관성 보장을 위한 공통 유틸리티를 추가함.
- **주요 변경 사항:**
  - **`PaginationService` 확장:**
    - `encodeOffsetCursor()`: 숫자형 offset을 base64 인코딩된 커서 문자열로 변환하는 메서드 추가.
    - `decodeOffsetCursor()`: 커서 문자열을 다시 offset으로 디코딩하며, 유효하지 않은 경우 안전하게 0(첫 페이지)을 반환하도록 구현함.
  - **시간 유틸리티 추가 (`time.util.ts`):**
    - `getCurrentHourTimestamp()`: 현재 시간을 기준으로 분/초를 초기화한 정각 타임스탬프(ms)를 반환함. 이는 Smart Loading(듀얼 캐시) 환경에서 각 캐시의 갱신 시점을 일원화하여 클라이언트가 캐시 변동을 감지하는 기준(version)으로 활용됨.
- **테스트:**
  - `PaginationService`와 `Time Utilities`에 대한 유닛 테스트를 추가하여 인코딩/디코딩 왕복 정밀도와 정각 타임스탬프 생성 로직을 검증함.