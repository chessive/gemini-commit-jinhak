refactor(foundation): Foundation 동기화 로직의 키 필드 처리 방식 개선

- `syncFoundationFromServer` 메서드에서 각 테이블의 서비스 식별자 필드명을 동적으로 처리하도록 리팩토링했습니다.
- `StudentFormSchema` 테이블이 `ServiceId`를 사용하고 다른 테이블은 `ServiceID`를 사용하는 스키마 불일치 문제를 해결하고, 향후 유사한 사례에 유연하게 대응할 수 있도록 개선했습니다.

- **주요 변경사항:**
  - `insertMethods` 설정 배열에 `whereField` 속성을 추가하여 테이블별 식별자 필드명을 명시적으로 지정할 수 있도록 변경
  - 데이터 조회 로직(`findMany`)에서 `whereField` 값을 동적으로 사용하여, 지정되지 않은 경우 기본값(`ServiceID`)을 사용하도록 수정
  - `studentFormSchema` 설정에 `whereField: 'ServiceId'`를 추가하여 올바른 필드로 조회하도록 수정
