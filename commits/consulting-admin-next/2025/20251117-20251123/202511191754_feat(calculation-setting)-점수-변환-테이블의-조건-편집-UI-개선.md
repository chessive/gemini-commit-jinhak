feat(calculation-setting): 점수 변환 테이블 조건 편집 UI 개선

- '점수 변환 테이블'의 조건(conditions) 편집 UI를 구조화된 폼으로 개선함
  - 기존의 자유 텍스트 입력 방식에서 `Autocomplete` 기반의 키 선택과 명시적인 값 입력을 지원하여 사용자 경험과 데이터 정합성을 향상시킴.
- `ConditionEditor` 및 `ConversionRuleEditor` 컴포넌트 신규 추가
  - `ConditionEditor`: 조건 키 선택, 다중 값 입력을 담당하는 재사용 가능한 컴포넌트.
  - `ConversionRuleEditor`: 조건과 변환 매핑을 포함하는 개별 규칙을 시각적으로 편집.
- 데이터 모델 및 타입 정의 개선
  - `conditions` 타입을 `{key, value[]}` 객체 배열로 변경하여 복잡한 조건 표현을 명확하게 함.
  - UI 상태 관리를 위한 폼 전용 타입(`ConversionEntry`, `ConversionRule`)을 `types.ts`에 신규 정의.
- 조건 키 상수화
  - `condition-keys.ts` 파일에 82개의 조건 키를 상수로 정의하여 관리 포인트를 일원화하고 유지보수성을 높임.
