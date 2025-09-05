[APPLY-686] fix(my-wonseo): 결제 마감일 형식 변경 (시간 비노출)

- 운영 요청에 따라 결제/미결제 원서의 마감일을 YYYY.MM.DD 형식으로 표시하고 시간은 비노출 처리합니다.
- 날짜 포맷팅 로직을 리팩토링하여 시간 포함 여부를 옵션으로 선택할 수 있는 `formatDateInKorean` 함수를 `my-wonseo.services.ts`에 추가했습니다.
- 신규 `formatDateOnly` 함수를 구현하고, 이를 `my-wonseo-unpaid-list-item.tsx`에 적용하여 마감 시간을 제거했습니다.
