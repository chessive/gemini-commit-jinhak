![gemini-commit-jinhak-thumbnail](README.jpeg)

# gemini-commit-jinhak

> Jinhak-customized Git commit message generator powered by Gemini AI.

## 개요

이 도구는 Gemini AI와 MCP(Model Context Protocol)를 활용하여 `git diff` 내용을 분석하고, 진학(Jinhak)의 표준 커밋 컨벤션에 맞는 메시지를 자동으로 생성합니다. 개발자의 일관성 있는 커밋 메시지 작성을 도와 생산성 향상에 기여합니다.

## 주요 기능

-   **Jira 연동**: 커밋 메시지에 Jira 이슈 번호가 포함된 경우, 자동으로 해당 이슈의 상세 내용을 가져와 참고합니다.
-   **Git 로그 학습**: 프로젝트의 기존 커밋 히스토리를 분석하여 스타일과 패턴을 학습하고, 일관된 메시지를 생성합니다.
-   **구조화된 메시지 생성**: 정해진 형식(타입, 스코프, 제목, 본문)에 따라 명확하고 구조화된 커밋 메시지를 만듭니다.
-   **자동 파일 저장**: 생성된 커밋 메시지는 설정된 규칙에 따라 프로젝트별/주간별 디렉토리에 자동으로 저장되어 관리가 용이합니다.

## 설치 및 설정

이 프로젝트를 사용하기 위한 초기 설정 방법입니다. 최초 1회만 필요합니다.

1.  **저장소 복제**
    ```bash
    git clone [저장소 URL]
    cd gemini-commit-jinhak
    ```

2.  **설정 파일 준비**
    `config/values.example.json` 파일을 복사하여 `config/values.json` 파일을 생성합니다.
    ```bash
    cp config/values.example.json config/values.json
    ```

3.  **개인 값 입력**
    `config/values.json` 파일을 열어, 파일 내의 플레이스홀더(`YOUR_...`, `/path/to/...`)를 모두 본인의 실제 값으로 교체합니다. 이 파일은 `.gitignore`에 의해 보호되므로 민감한 정보가 유출되지 않습니다.

4.  **최종 설정 파일 생성**
    아래 명령어를 실행하여 `.gemini/settings.json` 파일을 생성합니다.
    ```bash
    npm run config:generate
    ```
    이제 도구를 사용할 준비가 완료되었습니다. `values.json` 파일의 내용이 변경될 때마다 4번 단계를 다시 실행하여 설정을 업데이트할 수 있습니다.

## 커밋 메시지 기본 구조

```
[APPLY-XXX] type(scope): 간단한 설명

- 상세 변경사항 1
- 상세 변경사항 2
  - 하위 세부사항 (들여쓰기)
- 상세 변경사항 3
```

### 커밋 타입

-   **feat**: 새로운 기능 추가
-   **fix**: 버그 수정
-   **chore**: 빌드, 패키지 매니저, 환경 변수 등 수정
-   **refactor**: 코드 구조 개선 (기능 변경 없음)
-   **docs**: 문서 변경
-   **style**: 코드 포맷팅, 세미콜론 등 스타일 관련 수정
-   **test**: 테스트 추가 또는 수정

## 작동 프로세스

이 도구는 다음의 MCP 도구를 순서대로 활용하여 최적의 커밋 메시지를 생성합니다.

1.  **Jira 이슈 확인** (`jira_get_issue`)
2.  **Git 상태 확인** (`git_status`)
3.  **Staged 변경사항 분석** (`git_diff_staged`)
4.  **커밋 히스토리 참조** (`git_log`)
5.  **분석 및 메시지 구성** (`sequential-thinking`)

## 설정 관리

이 프로젝트의 핵심 설정 파일인 `.gemini/settings.json`은 **자동으로 생성**되며 직접 수정하지 않습니다.

모든 개인화 설정은 `config/values.json` 파일에서 관리하며, `npm run config:generate` 스크립트를 실행하면 `config/settings.template.json` 템플릿과 조합되어 최종 설정 파일이 만들어집니다.

## 커밋 메시지 저장 규칙

생성된 커밋 메시지는 체계적인 관리를 위해 아래 규칙에 따라 파일로 저장됩니다.

-   **디렉토리 구조**: `[프로젝트명]/[YYYYMMDD(월)]-[YYYYMMDD(일)]/`
-   **파일명**: `[이슈 키]_[타입](스코프)-[핵심 설명]_[YYYYMMDDHHmm].md`