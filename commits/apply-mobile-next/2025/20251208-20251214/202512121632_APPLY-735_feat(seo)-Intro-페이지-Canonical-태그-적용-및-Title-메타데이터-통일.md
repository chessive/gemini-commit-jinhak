[APPLY-735] feat(seo): Intro 페이지 Canonical 태그 적용 및 Title 메타데이터 통일

- 모바일 페이지가 Google 검색 결과에서 독립 문서로 오인되는 문제를 방지하기 위해 SEO 개선 작업을 수행함.
- **Canonical 태그 적용**:
  - `intro/page.tsx`에 `alternates.canonical` 속성을 추가하여, PC 도메인(`www.jinhakapply.com`)을 대표 URL로 지정함.
- **Title 메타데이터 통일**:
  - `layout.tsx` 및 각 페이지(`member-login`, `my-page`, `smart-ratio` 등)의 `metadata.title`에서 "모바일" 접미사를 제거함.
  - PC와 모바일의 검색 노출 제목을 통일하여 일관된 브랜드 경험을 제공하고 SEO 효율을 높임.
