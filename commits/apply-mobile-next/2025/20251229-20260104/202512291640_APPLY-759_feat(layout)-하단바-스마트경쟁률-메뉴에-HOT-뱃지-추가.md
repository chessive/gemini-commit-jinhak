[APPLY-759] feat(layout): 하단바 스마트경쟁률 메뉴에 'HOT' 뱃지 추가

- 경쟁률 메뉴의 주목도를 높이기 위해 하단바 아이콘에 뱃지 스타일을 적용함.
- `_layout.scss`에서 `.smart` 메뉴 링크에 가상 요소(`::after`)를 활용하여 `ico_nav_badge.svg` 이미지를 노출하도록 수정함.