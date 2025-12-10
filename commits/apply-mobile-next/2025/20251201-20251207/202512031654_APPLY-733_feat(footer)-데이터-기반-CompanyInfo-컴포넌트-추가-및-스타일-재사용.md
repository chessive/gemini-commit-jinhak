[APPLY-733] feat(footer): 데이터 기반 CompanyInfo 컴포넌트 추가 및 스타일 재사용

- Figma 디자인에 맞춰 푸터 하단에 회사 정보를 표시하는 `CompanyInfo` 컴포넌트를 추가함.
- **주요 개선 사항**:
  - **데이터 기반 구현**: 회사 정보를 상수로 분리하여 데이터 기반으로 렌더링하도록 구현함으로써 유지보수성을 향상시킴.
  - **CSS 재사용 극대화**: 기존 `FooterNavs`의 `.menu` 구조와 `point` 클래스를 100% 재사용하여 새로운 CSS 생성을 최소화하고 디자인 일관성을 확보함.
  - **품질 및 접근성 개선**: React key에 고유 ID를 사용하고, `role="contentinfo"` 및 `aria-label`을 추가하여 품질과 웹 접근성을 강화함.
- `MainFooter`에 신규 컴포넌트를 통합하고, Barrel Export 패턴을 적용하여 컴포넌트 구조를 정리함.
