refactor(config): custom_config.dart를 도메인별 파일로 분리

- 2,500줄이 넘는 거대한 custom_config.dart 파일을 6개의 도메인별 모듈로 분리하여 유지보수성 및 코드 가독성을 개선함
  - 각 설정 클래스는 `create()` 팩토리 메서드를 통해 생성되도록 변경
  - `ConfigSerializable` 추상 클래스를 `config_base.dart`로 분리하여 공통 기반을 마련
- 기존 `custom_config.dart`는 각 모듈을 export하는 진입점(entry point) 역할만 수행하도록 변경하여 하위 호환성을 100% 유지함

- 신규 파일:
  - `lib/utilities/config/config_base.dart`
  - `lib/utilities/config/data_config.dart`
  - `lib/utilities/config/global_config.dart`
  - `lib/utilities/config/result_config.dart`
  - `lib/utilities/config/result_detail_config.dart`
  - `lib/utilities/config/scoring_config.dart`