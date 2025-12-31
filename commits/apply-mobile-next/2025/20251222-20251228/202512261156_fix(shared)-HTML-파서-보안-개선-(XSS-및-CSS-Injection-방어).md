fix(shared): HTML 파서 보안 개선 (XSS 및 CSS Injection 방어)

- XSS 및 CSS Injection 공격 방지를 위해 위험한 HTML 태그(<script>, <style>)와 그 내용을 완전히 제거하는 보안 기능을 추가함.
- **주요 변경 사항**:
  - `stripDangerousTags` 함수를 신규 생성하여 `script`, `style` 태그와 내부 콘텐츠를 모두 제거하도록 구현함.
  - 자체 닫힘 태그 및 닫는 태그가 누락된 케이스 등 다양한 엣지 케이스를 처리할 수 있는 정규식을 적용함.
  - `convertHtmlToReactElements`에서 '위험 태그 제거 → 미지원 태그 제거' 순으로 2단계 새니타이제이션 파이프라인을 구축함.
- 이를 통해 신뢰할 수 없는 HTML 문자열 파싱 시 발생할 수 있는 보안 취약점을 해결함.
