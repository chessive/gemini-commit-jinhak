[UNIRATIO-71] feat(crawler): 대학별 테이블 셀렉터 연도 조건 동적 개선

- **문제점 개선**: 특정 대학의 테이블 셀렉터 적용 시, 매년 수동으로 `schoolYear` 배열에 연도를 추가해야 하는 문제를 해결했습니다.

- **`SchoolYearCondition` 인터페이스 도입** (`table-selector.interface.ts`)
    - `minYear`, `maxYear`, `years` 속성을 통해 특정 연도 이후, 특정 연도까지, 또는 특정 연도들에만 셀렉터를 적용할 수 있도록 확장 가능한 구조를 마련했습니다.

- **동적 연도 체크 로직 구현** (`table-selector.util.ts`)
    - `TableSelectorUtil`에 `checkYearCondition` 메소드를 추가하여, 새로운 `SchoolYearCondition` 객체에 기반한 동적 연도 검사를 수행하도록 변경했습니다.

- **예외 설정 파일 업데이트** (`table-selector.exception.ts`)
    - 기존에 하드코딩된 연도 배열 (`schoolYear: [2025]`)을 새로운 동적 조건 (`schoolYear: { minYear: 2025 }`) 방식으로 변경하여, 2025년 이후 모든 연도에 자동으로 셀렉터가 적용되도록 수정했습니다.
    - 이를 통해 향후 연도 추가를 위한 코드 수정이 필요 없어져 유지보수성이 향상되었습니다.
