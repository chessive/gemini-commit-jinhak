feat(crawler-test): 크롤링 에러 발생 학교 자동 식별 기능 추가

- POST /crawler/test/find-error-schools API 엔드포인트 추가
- 전체 서비스 목록을 순회하며 크롤링을 시도하고, 발생하는 모든 에러를 수집 및 분석하는 findErrorSchools 서비스 로직 구현
- 에러 타입 분류, 타임아웃 처리, 진행률 로깅, 상세 결과 리포팅 기능 포함
- 기능 구현에 필요한 DTO (FindErrorSchoolsDto) 및 응답 인터페이스 (FindErrorSchoolsResponse 등) 추가
