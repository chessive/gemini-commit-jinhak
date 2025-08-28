# Git 커밋 메시지 생성 지침 (MCP 활용)

## 개요

이 지침은 MCP(Model Context Protocol)를 활용하여 git diff 내용을 분석하고 일관된 커밋 메시지를 생성하기 위한 가이드라인입니다. 기본적으로 apply-next-mobile-server 프로젝트의 패턴을 따르며, 다른 프로젝트가 지정된 경우 해당 프로젝트의 repository 경로와 패턴을 분석하여 적용합니다.

## 1. MCP 도구 활용 프로세스

### 1.1 필수 MCP 도구 사용 순서

1. **Jira 이슈 확인**: `jira_get_issue` - 이슈 번호가 언급되면 자동으로 이슈 내용, 코멘트, 첨부파일 확인
2. **git 상태 확인**: `git_status` - 현재 git 상태 파악
3. **staged 변경사항 분석**: `git_diff_staged` - 커밋 대상 파일들의 변경 내용 확인
4. **커밋 히스토리 참조**: `git_log` - 프로젝트의 기존 커밋 메시지 패턴 분석
5. **사고 과정 정리**: `sequential-thinking` - 변경사항 분석 및 커밋 메시지 구성

### 1.2 프로젝트별 적응 방식

- **기본 프로젝트**: apply-next-mobile-server (/Users/jhapply.devs/Projects/apply-next-mobile-server)
- **다른 프로젝트 지정 시**: 사용자가 repository 경로를 명시하면 해당 프로젝트의 git log 분석
- **패턴 학습**: 각 프로젝트의 최근 20개 커밋 메시지에서 고유 패턴 추출 및 적용

### 1.3 분석 우선순위

- 먼저 MCP를 통해 실제 변경사항을 정확히 파악
- 해당 프로젝트 고유의 커밋 메시지 패턴을 기존 로그에서 학습
- 변경사항의 맥락과 영향도를 종합적으로 고려

## 2. 기본 커밋 메시지 구조 (apply-next-mobile-server 기준)

### 2.1 기본 형식

```
[APPLY-XXX] type(scope): 간단한 설명

- 상세 변경사항 1
- 상세 변경사항 2
  - 하위 세부사항 (들여쓰기로 계층 구조 표현)
  - 구체적인 변경 내용 (파일명, 변경 전후 비교 등)
- 상세 변경사항 3
```

### 2.2 계층적 본문 구조의 장점

- **명확한 정보 계층화**: 주요 변경사항과 세부 구현사항을 구분
- **가독성 향상**: 들여쓰기를 통한 시각적 구조화
- **상세한 맥락 제공**: 변경 전후 비교, 파일 경로, 구체적 수치 등 포함

### 2.3 핵심 규칙

- **이슈 번호**: `[APPLY-XXX]` 형식으로 시작 (이슈가 있는 경우)
- **타입**: 소문자로 표기 (feat, fix, chore, refactor, docs, style, test)
- **스코프**: 모듈명 또는 영향 범위, 다중 스코프 가능 (constants, email, sms)
- **설명**: 72자 이내, 현재 시제, 한글 사용 (개발 용어 제외)
- **본문**: `-` 불릿 포인트로 주요 변경사항, 들여쓰기로 세부사항 표현

### 2.4 프로젝트별 특수 사항

- **환경 변수 변경**: `chore(config)` 타입 사용
- **모듈 추가/수정**: 해당 모듈명을 스코프로 지정
- **다중 모듈 영향**: 관련된 모든 모듈을 스코프에 나열 (예: constants, email, sms)
- **NODE_ENV 관련**: `development`, `production` 등 표준 환경명 사용

## 3. 커밋 타입 분류

### 3.1 기본 타입

- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **chore**: 빌드 작업, 패키지 매니저 설정, 환경 변수 수정 등
- **refactor**: 기능 변경 없는 코드 구조 개선
- **docs**: 문서 변경 (README, API 문서 등)
- **style**: 코드 포맷팅, 세미콜론 누락 등
- **test**: 테스트 추가 또는 수정

### 3.2 프로젝트 특화 타입 사용법

- **config 관련**: `chore(config)` - 환경 설정, 상수 정의 등
- **database 관련**: `feat(entity)` 또는 `refactor(repository)`
- **api 관련**: `feat(controller)` 또는 `fix(service)`

## 4. MCP 기반 분석 방법론

### 4.1 단계별 분석 프로세스

1. **변경 파일 목록 확인**: 어떤 파일들이 수정되었는지 파악
2. **변경 내용 상세 분석**: 각 파일의 구체적인 변경사항 검토
3. **패턴 식별**: 여러 파일에 걸친 일관된 변경 패턴 확인
4. **영향도 평가**: 변경사항이 시스템에 미치는 영향 범위 분석
5. **목적 파악**: 변경사항의 근본적인 목적과 의도 파악

### 4.2 변경사항 그룹화 전략

- **관련성 기준**: 같은 목적을 가진 변경사항들을 하나로 그룹화
- **모듈 기준**: 동일 모듈 내 변경사항은 하나의 커밋으로 처리
- **기능 기준**: 하나의 기능 구현을 위한 변경사항들을 통합

## 5. 응답 형식 및 품질 기준

### 5.1 커밋 메시지 구성

```
[이슈번호] 타입(스코프): 핵심 변경 내용 요약

- 변경사항 1 (구체적이고 명확한 설명)
- 변경사항 2 (기술적 세부사항 포함)
- 변경사항 3 (영향 범위 명시)
```

### 5.2 품질 체크리스트

- [ ] MCP로 실제 변경사항을 정확히 분석했는가?
- [ ] 프로젝트의 기존 커밋 패턴을 준수했는가?
- [ ] 72자 제한을 지켰는가?
- [ ] 변경사항의 목적이 명확히 드러나는가?
- [ ] 한글과 영어를 적절히 조합했는가?

## 6. 특별 고려사항

### 6.1 보안 관련 변경

- 환경 변수, 토큰, 암호화 관련 변경 시 보안 영향 명시
- 민감한 정보 노출 위험이 있는 경우 별도 표기

### 6.2 Breaking Changes

- API 변경, 데이터베이스 스키마 변경 등은 `!` 표기 사용
- 예: `feat(api)!: 사용자 인증 API 응답 구조 변경`

### 6.3 환경별 고려사항

- development, test, production 환경별 영향도 고려
- NODE_ENV 변경과 같은 환경 설정 변경 시 모든 환경에 대한 영향 검토

## 7. 예시 케이스

### 8.1 실제 프로젝트 우수 사례

```
[APPLY-210] refactor(constants, email, sms): HTTP 설정 상수화 및 환경변수 개선

- HTTP 요청 관련 설정값(timeout, maxRedirects)을 상수 파일(HTTP_CONFIG)로 분리 및 모듈에 적용
  - email.module.ts, sms.module.ts에서 기존 하드코딩(5000, 5) → HTTP_CONFIG.TIMEOUT, HTTP_CONFIG.MAX_REDIRECTS 참조로 변경
- Dockerfile에 SMTP_HOST 환경변수 추가(빌드 ARG 및 ENV로 노출)
- constants 디렉토리 내 파일명 및 export 정규화
  - environment.const.ts → environment.constant.ts 등 파일명 일괄 변경
  - index.ts에서 constants export 경로 일치화 및 신규 http.constant.ts 추가
- 기존 환경변수 및 상수 import 구문 전체 경로 일관성 보정
```

**우수 사례 분석:**

- 다중 스코프 사용: `(constants, email, sms)`
- 계층적 구조: 주요 변경사항 → 구체적 파일 변경사항
- 변경 전후 명시: `하드코딩(5000, 5) → HTTP_CONFIG.TIMEOUT`
- 파일명 구체적 언급: `environment.const.ts → environment.constant.ts`

### 8.2 환경 변수 표준화

```
chore(config): NODE_ENV 환경 변수명 표준화

- 'develop' → 'development'로 통일하여 Node.js 표준 네이밍 준수
- 'prod' → 'production'으로 통일하여 일관성 개선
- 모든 모듈의 환경 체크 로직에 표준화된 환경명 적용
- env-validation.schema.ts에서 유효한 NODE_ENV 값 업데이트
```

### 8.3 기능 추가

```
[APPLY-218] feat(admission-program): 링크 오픈 타겟 타입 및 생성/수정자 필드 추가

- AdmissionProgram 엔티티에 targetType 필드 추가 (링크 오픈 방식 제어)
- createdBy, updatedBy 필드 추가로 프로그램 생성자/수정자 추적 기능 구현
- AdmissionProgramTargetTypeEnum 신규 추가 (WINDOW/SELF 옵션)
- Repository 쿼리에 targetType 필드 포함하여 조회 기능 확장
```

## 9. 주의사항

### 9.1 금지사항

- MCP 도구 없이 추측으로 커밋 메시지 작성 금지
- 프로젝트 패턴 무시하고 일반적인 형식만 사용 금지
- 변경사항의 맥락 파악 없이 단순 파일명 나열 금지

### 9.2 권장사항

- 항상 `git_log`로 해당 프로젝트의 최신 커밋 패턴 확인
- `sequential-thinking`으로 분석 과정 명확히 정리
- 변경사항의 비즈니스 가치와 기술적 의미 모두 고려
- 계층적 구조를 활용하여 구체적이고 상세한 변경 내용 기록

### 10. 커밋 메시지 파일 저장 규칙

생성된 커밋 메시지는 다음 규칙에 따라 현재 작업 디렉토리 내에 파일로 저장됩니다. 이는 작업 내역의 체계적인 관리와 추적을 위함입니다.

#### 10.1 디렉토리 구조

- **1단계 (프로젝트별)**: `commits/[프로젝트명]/`
  - 예: `commits/apply-next-mobile-server/`
- **2단계 (주간별)**: `[YYYYMMDD(월)]-[YYYYMMDD(일)]/`
  - 7일 단위(월요일 시작, 일요일 종료)로 디렉토리를 생성하여 관리합니다.
  - 예: `20250825-20250831/`

#### 10.2 파일명 규칙

파일명은 **`[YYYYMMDDHHmm]_[식별자].md`** 형식을 따릅니다.

- **식별자**: 커밋 메시지 형식을 직관적으로 표현하며, 스코프 유무에 따라 형태가 달라집니다.

  - **스코프가 있는 경우**: `[이슈 키]_[타입](스코프)-[핵심 설명]`
    - 예시: `APPLY-670_refactor(jinhak-cash)-컨트롤러-분리`
  - **스코프가 없는 경우**: `[이슈 키]_[타입]-[핵심 설명]`
    - 예시: `APPLY-671_docs-API-문서-업데이트`
  - _Jira 이슈가 없는 경우, 앞의 `[이슈 키]_` 부분만 생략됩니다.\_

- **고유성 확보**:
  - `[YYYYMMDDHHmm]`: 파일을 생성하는 시점의 년, 월, 일, 시(24H), 분을 조합합니다.
    - **생성 방법**: `run_shell_command` 도구와 `date +%Y%m%d%H%M` 명령어를 사용하여 현재 시간을 동적으로 생성합니다.
  - 예시: `202508251430`

#### 10.3 최종 경로 예시

- **스코프 O**: `.../202508251430_APPLY-670_refactor(jinhak-cash)-컨트롤러-분리.md`
- **스코프 X**: `.../202508251432_APPLY-671_docs-API-문서-업데이트.md`

### 11. `git-commit-generator` 저장소 커밋 규칙

이 저장소(`git-commit-generator`)는 다른 프로젝트의 커밋 메시지를 아카이빙하는 목적으로 사용됩니다. 따라서 이 저장소 자체에 커밋할 때는 다음 규칙을 따릅니다.

#### 11.1 커밋 메시지 추가 (`docs`)

다른 프로젝트의 커밋 메시지 파일(`*.md`)을 `commits/` 디렉토리에 추가할 경우, 다음 형식을 사용합니다.

-   **타입**: `docs`를 사용합니다.
-   **스코프**: 커밋 메시지가 유래한 **프로젝트명**을 소문자로 기입합니다. (예: `apply-next-mobile-server`)
-   **제목**: 어떤 기능 또는 내용에 대한 커밋 메시지가 추가되었는지 요약합니다.
-   **본문**: 추가된 커밋 메시지들의 주요 내용을 상세히 기술하여, 전체 변경 사항을 이해하기 쉽도록 돕습니다.

**좋은 예시:**

```
docs(apply-next-mobile-server): 가상계좌 생성 기능 구현 커밋 메시지 6건 추가

`apply-next-mobile-server` 프로젝트의 가상계좌 생성(`APPLY-667`) 기능 구현에 관련된 커밋 메시지 6건을 기록합니다.

**주요 변경사항 요약:**

- **환경변수 및 설정 (`config`)**:
  - 가상계좌 데이터 암호화를 위한 `VIRTUAL_ACCOUNT_AES_ENCRYPTION_KEY` 환경변수를 추가하고, `env-validation.schema`를 통해 유효성을 검증합니다.

- **핵심 유틸리티 및 상수 (`jinhak-cash`)**:
  - 지원하는 9개 은행 코드(`SUPPORTED_BANK_CODES`)를 상수로 정의하고, 코드 유효성을 검증하는 유틸리티를 추가합니다.
  - 외부 시스템 연동을 위해 PBKDF2 기반의 AES-256-CBC 암호화 유틸리티(`aes-encryption.util.ts`)를 구현합니다.

- **전용 예외 처리 (`exceptions`)**:
  - 연동 과정에서 발생할 수 있는 6가지 특정 오류(회원 없음, 타임아웃, 암호화 실패 등)에 대한 `ErrorCode` Enum과 커스텀 예외 클래스를 추가하여 오류 상황을 명확하게 처리합니다.

- **데이터 모델 및 서비스 확장 (`jinhak-cash`)**:
  - 외부 API 통신을 위한 `VirtualAccountServerRequest/Response` 인터페이스와 요청 DTO(`CreateVirtualAccountRequestDto`)를 정의하고, 유효성 검증 로직을 추가합니다.
  - `MemberService`와 `MemberRepository`를 확장하여 사용자 이름을 조회하는 기능을 추가합니다.

- **비즈니스 로직 및 API (`jinhak-cash`)**:
  - `VirtualAccountService`에 데이터 암호화, 외부 API 호출, 예외 처리를 포함한 가상계좌 생성 핵심 로직을 구현합니다.
  - `POST /jinhak-cash/virtual-accounts` API 엔드포인트를 신설하고, 상세한 Swagger 문서를 작성하여 API 명세를 구체화합니다.
  - `Dockerfile`에 관련 환경변수를 추가하여 배포 환경에 반영합니다.
```
