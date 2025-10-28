feat(student-form-schema): 동적 상담 폼 스키마 관리 기능 구현

- FSD(Feature-Sliced Design) 아키텍처에 기반하여 학생 상담에 사용될 폼을 동적으로 생성하고 관리하는 `student-form-schema` 기능을 신규 추가함.
- 관리자는 이 기능을 통해 서비스별로 다른 구조의 입력 폼을 유연하게 정의하고 배포할 수 있음.

### 주요 기능 및 구현 내용

- **1. 스키마 CRUD 및 목록 관리**
  - `StudentFormSchema`의 생성, 조회, 수정(복제), 삭제 기능을 구현함.
  - 서비스 ID(`serviceId`)를 기준으로 스키마 목록을 조회하고, 버전별로 관리함.
  - `Material-UI`의 `Table`을 사용하여 스키마 목록을 표시하고, `Dialog`를 통해 생성/수정/삭제 인터페이스를 제공함.

- **2. 비주얼 폼 빌더 (Form Builder)**
  - `@hello-pangea/dnd` 라이브러리를 활용하여 필드를 드래그 앤 드롭으로 순서를 변경할 수 있는 시각적 폼 빌더를 구현함.
  - 12가지 필드 타입(text, dropdown, school_selector 등)을 추가하고, 각 타입에 맞는 설정 UI를 제공함.
  - 필드별 필수 여부, 암호화, 조건부 노출(`visibilityRules`) 등 상세 규칙을 설정할 수 있음.
  - 13개의 사전 정의된 `필드 템플릿`을 제공하여 자주 사용하는 필드를 쉽게 추가할 수 있도록 함.

- **3. JSON 직접 편집기 (Monaco Editor)**
  - `monaco-editor`를 통합하여 관리자가 JSON 스키마를 직접 편집할 수 있는 기능을 제공함.
  - `use-json-validation` 훅을 구현하여 500ms debounce와 함께 실시간으로 JSON 유효성을 검증하고, 에러가 있을 경우 해당 라인에 마커를 표시함.
  - 폼 빌더와 JSON 에디터 간의 상태를 양방향으로 동기화하여 사용자 경험을 개선함.

- **4. 상태 관리 및 API 연동**
  - `TanStack Query`를 사용하여 서버 상태(스키마 목록/상세)를 관리하고, `query-key-factory`를 통해 타입-안전한 쿼리 키를 정의함.
  - `useCreateSchema`, `useUpdateSchema`, `useDeleteSchema` 등 `useMutation` 훅을 구현하여 API 요청 및 데이터 무효화 로직을 캡슐화함.
  - 백엔드 API 응답(PascalCase)을 프론트엔드(camelCase)에 맞게 변환하는 `transformers`를 추가하여 데이터 정규화.

- **5. 아키텍처 및 의존성**
  - `pages_fsd/student-form-schema` 경로에 FSD 원칙에 따라 `apis`, `components`, `hooks`, `models`, `constants`, `services` 디렉토리 구조를 설계함.
  - 신규 의존성으로 `@hello-pangea/dnd`, `monaco-editor`, `react-monaco-editor`를 추가함.
