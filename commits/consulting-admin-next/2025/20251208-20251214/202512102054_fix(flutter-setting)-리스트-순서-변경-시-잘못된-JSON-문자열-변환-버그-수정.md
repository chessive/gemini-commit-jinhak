fix(flutter-setting): 리스트 순서 변경 시 잘못된 JSON 문자열 변환 버그 수정

- ListOrderForm에서 드래그 앤 드롭으로 순서 변경 시 데이터를 저장하는 로직 수정.
- 기존 템플릿 리터럴(`[
${dupList}
]`) 방식은 배열 요소를 단순 나열하여 유효하지 않은 JSON 형식을 생성하는 문제가 있었음.
- JSON.stringify()를 사용하여 올바른 JSON 배열 문자열로 변환되도록 수정하여 데이터 무결성 확보.