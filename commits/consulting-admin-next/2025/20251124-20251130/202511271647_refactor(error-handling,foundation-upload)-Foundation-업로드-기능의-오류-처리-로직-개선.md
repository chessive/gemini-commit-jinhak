refactor(error-handling, foundation-upload): Foundation 업로드 기능의 오류 처리 로직 개선

- AxiosError에서 일관되고 사용자 친화적인 오류 메시지를 추출하는 extractErrorMessage 유틸리티 함수를 추가함.
- API 응답(성공/실패)에 대한 ApiSuccessResponse, ApiErrorResponse 인터페이스와 타입 가드를 shared/models에 정의하여 타입 안정성을 강화함.
- useFoundationUploadMutation 훅에서 새로운 extractErrorMessage 유틸리티를 사용하도록 리팩토링하여, 오류 메시지 표시 로직을 중앙화하고 단순화함.
- Foundation 업로드 관련 API 함수들의 반환 타입을 명시적으로 정의하여 예측 가능성을 높임.
- useFoundationUploadMutation 훅의 반환 값을 useMemo로 최적화하고 불필요한 useRef를 제거하여 코드를 간소화함.