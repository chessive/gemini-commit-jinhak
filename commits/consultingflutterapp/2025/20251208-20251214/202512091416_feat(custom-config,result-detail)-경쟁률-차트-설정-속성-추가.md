feat(custom-config, result-detail): 경쟁률 차트 설정(제목, 소수점) 속성 추가

CustomConfig를 통해 경쟁률 차트(`CompetitionRatioChart`)의 제목과 데이터 표시 형식을 동적으로 설정할 수 있도록 기능을 확장함.

### 주요 변경 사항

- **CustomConfig 속성 추가 (`result_detail_config.dart`):**
  - `resultDetail.competitionRatioChart` 그룹 추가
  - `titleOneYear`: 1년치 데이터만 있을 때 표시할 차트 제목 (기본값: "지난 경쟁률")
  - `titleMultiYear`: 3년치 데이터가 있을 때 표시할 차트 제목 (기본값: "지난 3개년 경쟁률")
  - `decimalPlaces`: 차트 막대 상단에 표시되는 경쟁률 값의 소수점 자릿수 (기본값: 2)

- **차트 위젯 업데이트 (`CompetitionRatioData.dart`):**
  - `GlobalConfigManager`를 통해 설정값을 로드하도록 수정
  - 데이터 개수(1개 vs 다수)에 따라 설정된 제목을 동적으로 적용
  - `decimalPlaces` 설정값에 맞춰 데이터 라벨의 소수점 포맷팅 적용 (`toStringAsFixed`)

- **코드 포맷팅 (`buildStickChart.dart`):**
  - 관련 파일의 코드 스타일 및 들여쓰기 정규화
