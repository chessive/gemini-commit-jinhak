fix(foundation-store, data-loading): 데이터 초기화 및 로딩 로직 오류 수정

앱 실행 시 비동기 데이터 로딩과 UI 렌더링 간의 타이밍 문제로 발생하던 `LateInitializationError` 크래시 및 2차 실행 시 학교 목록이 표시되지 않던 버그를 수정함.

### 문제 원인
1. `FoundationStore`의 `late` 필드들이 데이터 로딩 완료 전에 접근되어 앱 크래시 발생.
2. `RegisterScreen`이 로컬 DB에 데이터가 존재할 경우, 이를 `FoundationStore`로 로드하지 않아 2차 실행부터 데이터가 누락됨.
3. `SchoolSelectorWidget`이 `context.read`를 사용하여 데이터 변경을 감지하지 못하고 빈 목록을 표시함.

### 해결 방안 (3단계 다층 방어)

#### 1. Provider 초기화 오류 수정 (`FoundationStore`)
- 모든 `late List` 변수를 빈 리스트(`[]`)로 즉시 초기화하여, `LateInitializationError`의 근본 원인을 제거하고 앱 안정성을 확보함.

#### 2. 데이터 로딩 로직 보완 (`RegisterScreen`)
- 로컬 SQLite DB에 데이터가 존재할 경우, API를 호출하는 대신 DB에서 직접 데이터를 읽어 `FoundationStore`에 로드하는 로직을 추가함. 이를 통해 앱의 2차 실행부터 데이터가 정상적으로 표시되도록 수정함.

#### 3. UI 데이터 동기화 및 방어 코드 추가
- **`StudentInfoScreen`**: 화면 빌드 시 학교/대학 목록 데이터가 로드되었는지 확인하고, 로딩 중일 경우 프로그레스 인디케이터를 표시하여 UI가 비정상적으로 렌더링되는 것을 방지함.
- **`SchoolSelectorWidget`**: `initState`에서 `context.read`로 데이터를 한 번만 읽던 방식에서, `build` 메서드 내에서 `context.watch`를 사용하도록 리팩토링함. 이를 통해 데이터가 비동기적으로 로드 완료되면 UI가 자동으로 갱신되도록 수정함.

### 기대 효과
- **앱 안정성 향상**: `LateInitializationError`로 인한 앱 크래시를 원천적으로 방지함.
- **데이터 로딩 일관성**: 온라인, 오프라인 상태와 관계없이 앱 실행 시 항상 정확한 데이터가 표시됨.
- **코드 품질 개선**: 반응형 프로그래밍 원칙에 따라 UI와 데이터 상태를 동기화하고, 방어적인 코드를 추가하여 잠재적 버그를 예방함.