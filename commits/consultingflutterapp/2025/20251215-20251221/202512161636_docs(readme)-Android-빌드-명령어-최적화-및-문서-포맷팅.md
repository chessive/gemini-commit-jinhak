docs(readme): Android 빌드 명령어 최적화 및 문서 포맷팅

README.md 파일의 Android 릴리스 빌드 섹션을 업데이트하여 APK 용량 최적화 방법을 안내하고, YAML 설정 예시의 포맷을 개선함.

- **빌드 명령어 개선:**
  - `flutter build apk` 명령어에 `--target-platform android-arm64` 옵션을 추가하여 불필요한 아키텍처(x86_64, armeabi-v7a)를 제외함.
  - 최적화 효과(용량 약 1/3 감소)와 구형 기기 호환성에 대한 상세 설명을 추가함.

- **포맷팅 수정:**
  - `app_config.yaml` 예시 코드의 문자열 인용부호를 일관성 있게 큰따옴표(")로 변경함.
