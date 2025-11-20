feat(data-model): DB 기반 동적 계산 시스템 모델 클래스 구현 및 개선

DB 기반의 동적 점수 계산 시스템(Calc-Config V2)을 위한 핵심 데이터 모델 클래스를 구현하고, 초기 버전에 대한 코드 품질 개선 작업을 진행함. (Phase 3 완료)

### 주요 변경 사항

- **4개의 핵심 모델 클래스 및 직렬화 코드 구현:**
  - `score_calc_config.dart`: 계산 케이스와 계산 방법을 매핑하는 모델.
  - `score_calc_method_config.dart`: 실제 계산 단계를 정의하는 모델.
  - `score_conversion_table.dart`: 점수 변환표 로직을 포함하는 모델.
  - `calculation_result.dart`: 최종 및 중간 계산 결과를 저장하는 모델.

- **코드 품질 및 안정성 개선:**
  - **상세 주석 추가**: 모든 모델, 속성, 주요 메서드에 KDoc 스타일의 상세한 설명을 추가하여 가독성 및 유지보수성을 향상시킴.
  - **유효성 검증 강화**: `ScoreCalcConfig` 및 `TargetField` 생성자에 `ArgumentError` 예외 처리 로직을 추가하여, 잘못된 데이터로 인한 객체 생성을 방지함.
  - **JSON 키 명시**: `@JsonKey` 어노테이션을 사용하여 Dart 필드와 실제 JSON 키(`ServiceID` 등)를 명확하게 매핑함.

- **성능 최적화:**
  - `ScoreConversionTable`의 변환 로직(`_applyConversion`)에서, 반복적인 정렬 작업을 피하기 위해 정렬된 키를 캐싱하는 로직(`getSortedKeysDesc`, `getSortedKeysAsc`)을 추가하여 성능을 개선함.
