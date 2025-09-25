[UNIRATIO-79] fix(resize): 브라우저 리사이즈 시 무한 루프 버그 수정

- 브라우저 확대/축소 시 발생하던 "Maximum update depth exceeded" 오류를 해결하고, 관련 로직을 리팩토링함.

### 버그 수정
- **`ResizeObserver` 무한 루프 해결**:
  - `virtualizer`의 동적 높이 측정을 비활성화하고, 행의 높이를 36px로 고정하여 불필요한 재계산을 방지함.
  - `debounce`를 적용하여 연속적인 리사이즈 이벤트 발생 시 상태 업데이트를 제어함.
- **Tailwind CSS 동적 클래스 문제 해결**:
  - `h-[${virtualizer.getTotalSize()}px]`와 같이 동적으로 생성되던 Tailwind 클래스를 `style` 속성으로 변경하여 렌더링 안정성을 확보함.

### 리팩토링
- **공통 Hook 추가**:
  - 중복되던 `ResizeObserver` 로직을 `useDebouncedResizeObserver` 훅으로 분리하여 중앙에서 관리함.
- **상수 파일 생성**:
  - 리사이즈 관련 설정값(debounce 시간, threshold 등)을 `resize-constants.ts` 파일로 분리하여 매직 넘버를 제거하고 유지보수성을 향상시킴.
- **불필요한 코드 제거**:
  - 더 이상 사용하지 않는 `use-update-height.tsx` 훅을 삭제함.