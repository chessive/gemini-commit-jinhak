fix(error-handling): 서비스 오류 처리 방식 개선 및 로깅 강화

- DeployService와 FileService의 오류 처리 로직을 ServiceException을 사용하도록 리팩토링함.
- 기존 try-catch 구문에서 ResponseDto를 직접 반환하던 방식을 NestJS 표준 예외 필터링을 활용할 수 있도록 ServiceException을 throw하는 방식으로 변경.
- ServiceException에 httpStatus와 상세 오류(detail)를 포함하여 명확한 오류 컨텍스트를 제공하도록 개선.
- 오류 로깅 시 serviceID, fileName 등 디버깅에 유용한 컨텍스트 정보를 추가하여 추적성을 강화함.