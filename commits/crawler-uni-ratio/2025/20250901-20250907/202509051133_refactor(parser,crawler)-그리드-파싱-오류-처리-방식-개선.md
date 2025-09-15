refactor(parser, crawler): 그리드 파싱 오류 처리 방식 개선

- ratio-table.parser가 오류를 throw하는 대신, 상세 정보를 수집하여 GridParsingResult 객체로 반환하도록 변경
- GridParsingError 및 GridParsingResult 인터페이스 추가
- CrawlerDataService가 파싱 오류를 수집하고, getLastGridErrors 메소드를 통해 조회할 수 있도록 수정
- FetchResult에 gridParsingErrors 필드 추가하여 오류 데이터 전파
