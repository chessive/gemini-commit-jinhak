[APPLY-736] feat(menu, smart-ratio, jinhak-cash): 메뉴 개선

- 메뉴에 '진학캐쉬' 링크를 추가하고, '스마트 경쟁률' 용어를 '스마트경쟁률'로 통일하여 사용자 혼동을 줄임.
  - `link-menu-list.constant.ts`에 '진학캐쉬' 메뉴 추가
  - `app-routes.ts`, `pathname.ts`, `ratio-ranking.types.ts`, `README.md`, `_smart.scss` 파일에서 '스마트 경쟁률' -> '스마트경쟁률'로 용어 변경.
