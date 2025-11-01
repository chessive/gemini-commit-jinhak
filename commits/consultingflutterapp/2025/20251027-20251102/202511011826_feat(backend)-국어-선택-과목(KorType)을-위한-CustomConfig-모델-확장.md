feat(config): 국어 선택 과목(KorType)을 위한 CustomConfig 모델 확장

국어 점수에 선택 과목(언어와 매체, 화법과 작문) 기능을 추가하기 위해, `scoring_config.dart`의 데이터 모델을 확장함.

### 주요 변경 사항

- **`ScoringConfigInputFormKorScore` 클래스 확장:**
  - `isActiveKorType`(bool): 국어 타입 선택 UI 활성화 여부 플래그.
  - `listKorType`(object): 선택 가능한 국어 과목 목록 (`language`, `literatureAndWriting`).
  - `listKorTypeLabel`(object): 각 과목에 대한 커스텀 라벨.

- **신규 클래스 추가:**
  - `ScoringConfigInputFormKorScoreListKorType`: `listKorType` 객체를 모델링.
  - `ScoringConfigInputFormKorScoreListKorTypeLabel`: `listKorTypeLabel` 객체를 모델링.

- **메서드 수정:**
  - `toJson()` 및 `updateFromJson()`: 새로 추가된 3개의 필드를 직렬화 및 역직렬화 로직에 포함.

이 변경은 수학 과목 선택(`MathType`)과 동일한 구조를 따르며, 프론트엔드에서 국어 선택 UI를 구현하기 위한 데이터 처리 기반을 마련함.