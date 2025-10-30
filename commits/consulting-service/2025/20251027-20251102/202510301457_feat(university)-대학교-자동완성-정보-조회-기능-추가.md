feat(university): 대학교 자동완성 정보 조회 기능 추가

- `prisma.schema`에 `UniversityAutoComplete` 모델을 추가하여 대학교 기본 정보를 저장함
- `GET /university` API 엔드포인트를 신설하여 대학교 자동완성 목록을 이름순으로 정렬하여 제공함
- `ConsultingRepository` 및 `ConsultingService`에 `getUniversities` 메서드를 추가하여 데이터 조회 로직을 구현함
- `CommonController`의 `findUniversity` 메서드와 Swagger 응답 스키마를 상세히 정의하여 API 명세를 구체화함
