fix(student-form, ui): Scrollbar 컨트롤러 연결 오류 수정

- StudentInfoScreen 진입 시 발생하던 Scrollbar의 ScrollController 미연결 에러 해결
- 렌더링 시점의 타이밍 이슈로 인한 문제로, Scrollbar 위젯 제거 및 SingleChildScrollView만 사용하도록 변경하여 해결함
- 이 변경으로 에러 미발생 및 마우스 휠 스크롤 기능 유지

주요 변경사항:
- `student_info_form.dart` 및 `agree_widget.dart`에서 `Scrollbar` 위젯 제거
- 불필요한 `ScrollController` 관련 코드 제거