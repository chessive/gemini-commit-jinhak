chore(flutter): Flutter 3.35.5 SDK 업그레이드 및 종속성 마이그레이션

- Flutter SDK 3.24.3 → 3.35.5, Dart SDK 3.5.3 → 3.9.2 업그레이드
- 66개 종속성 패키지를 Flutter 3.35 호환 버전으로 업데이트
  - `syncfusion` 27.x → 31.x, `pdfrx` 1.x → 2.x, `permission_handler` 11.x → 12.x 등 주요 패키지 포함
- Android 네이티브 설정 마이그레이션
  - Kotlin `1.8.22` → `2.1.0`
  - Android Gradle Plugin `8.1.0` → `8.7.3`
  - `compileSdkVersion` 34 → 36
  - Gradle JVM 메모리(`-Xmx4096M`) 증설
- Deprecated API 마이그레이션 및 코드 수정
  - `DropdownButtonFormField`: `value` → `initialValue`
  - `Color.withOpacity()` → `Color.withValues(alpha: ...)`
  - `CupertinoSwitch`: `trackColor` → `activeTrackColor`, `inactiveTrackColor`
  - `pdfrx`: `relayout()` 제거 등 API 변경사항 적용
  - `Share.shareXFiles` → `SharePlus.instance.share`
- `README.md`에 Flutter 3.35 마이그레이션 가이드, 문제 해결 방법 등 상세 문서 추가
