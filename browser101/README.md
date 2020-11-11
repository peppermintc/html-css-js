### web socket

- 브라우저와 서버의 양뱡향 통신을 가능하게하는 것
- HTML5 표준 기술로 오래된 브라우저에서는 작동하지 않는다
- Websocket API를 통하여 서버에 메시지를 보낸다
- AJAX 통신보다 속도가 빠르다

### HTML5

- 2020년 현재 기준 가장 최신의 HTML 표준 버전

### key down, key press 차이

- 두가지 다 키보드를 눌렀을 때 동작
- key down은 눌르고 있어도 처음 한번만 실행
- key press는 누르고 있는 동안 계속 실행

### event handler

- 특정 요소(Element)에서 발생한 Event를 처리하기 위한 함수
- 요소의 이벤트 발생시, 웹브라우저는 연결된 이벤트 핸들러를 실행

### 브라우저 동작 취소

- event.preventDefault()는 브라우저에서 기본적으로 발생하는 동작을 취소한다 (addEventListener를 통해 이벤트 리스너를 등록할 때, callback 함수 내부에 사용하여 callback 함수 동작은 수행하되 브라우저 동작은 수행하지 않도록 할 수 있다)
- passive event listener는 스크롤 이벤트 관련 옵션
- 스크롤링 이벤트의 경우에는 event.preventDefault()로 브라우저에서 화면 스크롤되는 것을 취소 할 수 없다 기본적으로 passive event listener이기 때문이다
- addEventListener의 옵션으로 passive: true를 설정하면 preventDefault()로 브라우저 동작을 취소할 수 없게된다
- passive: false 옵션을 주게되면 active event listener가 되어 preventDefault()를 사용 할 수 있다
