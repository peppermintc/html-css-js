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

### line-height: 100%; (CSS)를 이용하면 브라우저 기본 속성 때문에 상하가 어긋난 글자를 올바르게 중간으로 위치하게 할 수 있다

### getBoundingClientRect()를 이용하면 쿼리셀렉터로 선택한 Element의 사이즈와 포지션을 알 수 있음

```javascript
const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();
```

### Position

- static: 모든 태그들은 기본적으론 position: static 상태
- relative: static에서 태그 위치를 살짱 변경하고 싶을 때 사용 (top,bottom,left,right) 겹치면 z-index 속성 사용
- absolute: static 속성이 아닌 부모를 기준 삼음 (div가 width:100%가 아니게 된다)
- fixed: 특정 위치에 고정 (div가 width:100%가 아니게 된다)

### display: none은 렌더트리에 element를 포함시키지 않기 때문에 다른 element들의 사이즈에 영향을 줄 수 있음, 이 경우에는 visibility: hidden;을 사용

### javascript object는 const로 선언하더라도 key 값으로 조회하여 변경할 수 있음

### primitive type은 그 값이 메모리에 저장되지만 object의 경우에는 사이즈가 크기 때문에 주소값을 메모리에 저장

### script tag에 type module을 추가해줌으로써 javascript의 import, export를 브라우저가 지원하도록 할 수 있고 기본적으로 defer 속성을 가지기 때문에 따로 defer 속성을 명시 할 필요가 없음

### class binding

- 함수를 인자 혹은 콜백으로 전달할 경우, class 정보는 함께 전달되어지지 않으므로, 함수 내부에서 this 정보가 존재하지 않음
- 클래스 정보를 사용하여 this를 사용하고 싶을 경우, 클래스와 바인딩을 해주거나 arrow function을 사용 (보통은 arrow function을 많이 사용)
- arrow function은 this가 유지됨

### Builder Pattern

- 빌드 클래스를 만들어 내부의 클래스를 노출시키지 않고 메소드 체이닝으 이용하여 가독성을 향상 시킬 수 있음
- 클래스 생성시 입력하는 설정 파라미터 값들을 볼 수 있는 장점이 있음

### Object.freeze를 사용함으로써 Object 불변성을 유지하면서 Object 생성

### 각각의 process는 독립된 Heap, Data, Stack, Code로 구성되어짐 thread는 multi-thread의 경우 Heap, Data, Code는 공유, Stack은 독립된 stack을 가짐

- Heap: 동적 생성 데이터 저장
- Data: 정적 데이터, 글로벌 변수 데이터
- Code: 프로그램 코드
- Stack: 함수 호출을 기록하는 Last In Last Oout 자료구조

### JavaScript Runtime Environment

- Event Loop은 Call Stack이 비어서 동작하지 않을 때, Task Queue에서 callback을 Call Stack으로 가져와서 Javascript Engine이 수행 할 수 있게 도와줌

- Event Listener에서 Click Event가 발생하면 Task Queue에 Click Callback이 쌓여서 기다리고 있다가 Call Stack이 비었을 때 Event Loop를 통해서 Call Stack으로 옮겨져 처리됨

### Microtask Queue

- Promise에 등록된 콜백이 다 수행되고 나면 then에 등록한 콜백 함수와 Mutation observer들이 Microtask Queue에 들어옴
- 예: fetch를 promise에서 수행하는 것이 resolve가 되면 then의 콜백과 Mutation Observer가 microtask queue에 들어옴
- Microtask Queue가 Call Stack으로 옮겨져 수행이 될 때에는 도중에 새롭게 microtask Queue에 들어온 task까지도 모두 완료 될 때까지 callstack에서 수행됨 (Task Queue에서는 한개의 callback만 callstack에서 수행되는 것과 차이있음)
- Task Queue는 한번 돌때 하나씩만 꺼내서 실행, MicroTask Queue는 한번 방문하면 큐안에 있는 모든 Task들을 다 꺼내서 실행

### Mutation Observer

- DOM Element의 변경사항 감시 기능 제공하는 객체

### Render

- Request Animation Frame -> Render Tree 생성 -> layout -> Paint, Composite -> 표시
- layout: 크기와 위치들 계산
- composite: 병합

### Request Animation Frame

- 다음에 브라우저가 업데이트 되기 전에 실행 할 콜백들을 큐에 쌓아두고 렌더링 트리를 만들기 전에 큐의 task들을 모두 수행한다
- 60fps 사람 눈에 애니메이션이 자연스럽게 보이기 위한 표시 속도에 맞추어 브라우저는 Render를 수행함

### Call Stack에서 Callback을 동작시키는 동안은 브라우저는 다른 동작을 하지 않기 때문에 Callback을 최대한 간단하게 구현하는 것을 권장

### Task Queue와 Micro Task Queue의 차이

- promise의 콜백은 micro task queue로 옮겨진다
- micro task queue는 모든 task가 완료 될 때까지 다른 동작을 수행하지 않는다
