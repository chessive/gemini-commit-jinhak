[APPLY-667] fix(jinhak-cash): 가상계좌 서버 연동 시 JSON 직렬화 및 헤더 수정

- 레거시 가상계좌 서버(.aspx)와 호환성을 보장하기 위해, 외부 API 요청 방식을 수정합니다.
- `httpService.post` 호출 시 요청 본문을 `JSON.stringify()`를 사용해 명시적으로 JSON 문자열로 변환하여 전송합니다.
- `Content-Type` 헤더에 `charset=utf-8`을 추가하여, URL 인코딩된 암호화 데이터가 올바르게 해석되도록 보장합니다.
