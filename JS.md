# JS

[TOC]

> **Specification** 
>
> => 안내 책자, 이렇게 적으면 브라우저는 이렇게 나와야 합니다 ~ ~



> **ES5** => ECMAScript5 , **ES6** => ECMAScript6 
>
> Specification의 버전을 나타내는 것 



> **Camel Case** => 소문자로 시작해서 스페이스가 필요할때는 대문자로,  ex) daysWeek



## JS 문법 

### 1. 변수, 상수

```js
let a = 221; // let = > 변수 선언

const b = 111; // const = > 상수 선언 

var c = 333; // var => 변수 

const wat = false; // 0

const wat2 = true; // 1

// 주석 => //, /**/ 
```



> **var, let, const 차이** 
>
> var => function scoped 
>
> let, const => block scoped 



### 2. array

```js
const daysWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

console.log(daysWeek)
```



### 3. object

```js
const dainInfo = {
  name:"Dain",
  age:24,
  gender:"Female",
  inHandsome:true,
  favFood: [
   {
      name: 'Kimchi',
      fatty: false
   },
   {
      name: 'Cheese burger',
      fatty: true
   }
 ]
} 

console.log(dainInfo.gender);
dainInfo.gender = "Male"
console.log(dainInfo.gender);
console.log(dainInfo)
```



### 4. function

```js
// potato => argument, 함수안에서 사용할 이름 
function sayHello(potato, age){
  console.log('Hello!', potato, "your age is", age);
  console.log('Hello!' + potato + "your age is" + age);
  // string안에 변수 넣을 때 백틱
  console.log(`Hello ${potato}`);
  return `Hello ${potato} you you you`;
}

const greetDain = sayHello("Dain!", 24);
console.log(greetDain)
const calculator = {
  plus: function(a, b){
  	return a + b;
  }
}

const plus = calculator.plus(5, 5)
console.log(plus)
```



### 5. HTML을 DOM 객체로 바꾸기

```js
// querySelector => 노드의 첫번째 자식 반환
// id로 접근할때는 #, 클래스로 접근할때는.
const title = document.querySelector("#title");
title.innerHTML = "Hi!! ";
title.style.color = "red";
document.title = "Sleeping";
console.dir(title);
```



### 6. Event 

```js
// Event => 웹 사이트에서 발생하는 것들 
// 자바스크립트는 이벤트에 반응하기 위해 만들어졌어
// 함수를 다 기다리면 웹사이트가 느려지니까, 이벤트에서 다룰 함수 적어준다.


function handleResize() {
  console.log('I hav been resized');
}

// handleResize() 이렇게 적으면 자동으로 함수 호출
// 윈도우 사이즈가 변경되었을 때 호출하려면 handleResize
window.addEventListener("resize", handleResize);


function handleClick() {
	title.style.color =  "green";
}
title.addEventListener("click", handleClick);
```



### 7. if문

```js
// JS에서는 === , && , ||

true && true = true;
false && true = false;
true || false = true;
false || false = false;

if(true){
  console.log('haha');
}else if(false){
  console.log('hoho');
}else {
  console.log('hihi');
}


```



### 8. prompt

```js
// prmopt => 예전의 자바스크립트
const age = prompt("How old are you ?")
console.log(age)
```



### 9. 함수 + if 문

```js
const BASE_COLOR = title.style.color
const OTHER_COLOR = "rgb(255, 255, 255)"

function Click() {
  const currentColor = title.style.color;
  if(currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  // title.addEventListener("click", Click);
  title.addEventListener("mouseenter", Click);
}

init();
```



### 10. ClassList add, remove 

```js
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function classClick() {
  // const currentClass = title.className;
  const hasClass = title.classList.contains(CLICKED_CLASS);
  // if (currentClass !== CLICKED_CLASS) {
  if(!hasClass){
    // title.className = CLICKED_CLASS;
    title.classList.add(CLICKED_CLASS)
  } else {
    // title.className = "";
    title.classList.remove(CLICKED_CLASS)
  }
  // toggle은 우리가 이전에 했던 같은 일을 해준다. 
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", classClick);
}

init();
```



### 11. 동기 VS 비동기

- 동기 (Synchronous) => 코드가 위에서부터 아래로 내려오며 하나가 끝나면 다음 코드가 실행되는 방식
- 비동기(Asynchronous) => 비동기적 코드의 실행 결과는 동기적 코드의 실행이 완료되면 값을 반환한다. 이전에 요청한 작업의 결과여부에 관계없이 나열된 순서대로 요청을 날려버리는 방식입니다. 자바스크립트는 비동기 방식의 프로그래밍 언어





## Momentum

### 1. index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momentum</title>
  <meta charset="utf-8"/> 
  <link rel="stylesheet" href="index.css"/>
</head>
<body>
    <!--clock-->
  <div class="js-clock">
    <h1 class="js-title"></h1>
  </div>
    
    <!--greeting-->
  <form class="js-form form">
    <input type="text" placeholder="what is your name?"/>
  </form>
  <h4 class="js-greetings greetings"></h4>
    
  	<!--ToDo-->
  <form class="js-toDoForm">
    <input type="text" placeholder="write a to do"/>
  </form>
  <ul class="js-toDoList"></ul>
    
    <!--weather-->
  <span class="js-weather"></span>
    
  <script src="./clock.js"></script>
  <script src="./greeting.js"></script>
  <script src="./todo.js"></script>
  <script src="./bg.js"></script>
  <script src="./weather.js"></script>
</body>
</html>
```



### 2. index.css

```css
body {
  background-color: white;
}

.btn {
  cursor: pointer;
}

body {
  color: aliceblue;
}

.clicked {
  color: blanchedalmond;
}

.form,
.greetings {
  display: none ;
}

.showing {
  display: block;
}

/* @keyframes fadeIn{
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
} */

.bgImg{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  /* animation: fadeIn 0.5s linear; */
}
```



### 3. greeting.js

```js
// querySelector는 찾은 것의 첫번째 것을 가져옴
// querySelectorAll은 클래스명에 따른 모든 엘리먼트들을 가져와서 array로 준다. 
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

// local stage => 작은 정보를 유저 컴퓨터에 저장하는 방법 

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  // text가 입력 받은 데이터
  // USER_LS를 입력받은 데이터로 저장한다. 
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  // 원래는 엔터 누르면 입력한게 사라지는게 default인데 그걸 막는다? 
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  // form 보여줘라 
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

// classList로 클래스를 제어한다.
function paintGreeting(text){
  // form 숨기고 
  form.classList.remove(SHOWING_CN);
  // 인사하는거 보여주고 
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}!`;
}

function loadName() {
  const currnetUser = localStorage.getItem(USER_LS); // 입력받은 정보 저장
  if(currnetUser === null){
    // user가 없는 경우
    askForName();
  } else {
    // 유저가 있는 경우 
    paintGreeting(currnetUser);
  }
}

function init() {
  loadName();
}

init();
```



### 4. todo.js

```js
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

// toDos는 이따가 바꿔줄꺼니까 let으로 놓자 
let toDos = [];

function deleteToDo(event) {
  // event.target => 이벤트를 전달한 객체에 대한 참조 
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
    
  // toDos array에서 filterFn에 true인 애들만 반환 
  // filter는 array의 모든 아이템을 통해 함수를 실행하고 true인 아이템들만 가지고 새로운 array를 만든다. 
  const cleanToDos = toDos.filter(function(toDo) {
    // li.id에 없는건 toDos array에서도 제거할 것 이다.
    // toDo.id => int, li.id => string 이여서 parseInt, parseInt는 string을 int로 바꿀 수 있다.
    // 지금 여기에 온 li는 삭제해야 할 li 이고, 그 li.id랑 다른 id를 가진 toDo만 저장한다. 
    console.log(toDo.id, parseInt(li.id));
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
  // console.log(cleanToDos);
}

function saveToDos() {
  // local Storage는 자바스크립트 데이터를 저장할 수 없다. string으로만 저장 가능 
  // JS는 local storage에 있는 모든 데이터를 string으로 저장하려고 한다. 
  // 그래서 우리는 우리 object가 string이 되도록 만들어야 한다. 
  // 그러기 위해 아주 좋은 트릭인 JSON.stringify를 쓸꺼양.
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  console.log(text);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  span.innerText = text;
  
  // li에 span, delBtn, id를 추가하고
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
    
  // 그 li를 toDoList에 추가한다. 
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  // push해서 array 안에 넣을 수 있다. 
  // push 한 후에 호출하자 
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  console.log('handleSubmit');
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  // TODOS_LS에는 ToDos가 담겨져있음. 
  const loadedtoDos = localStorage.getItem(TODOS_LS);
  if (loadedtoDos !== null){
    // JSON => Javascript Object Notaion 
    // 데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능 
    // 자바스크립트 object를 string으로 변환해주기도 하고, string을 object로 변환해줄 수도 있음. 
    const parsedToDos = JSON.parse(loadedtoDos);
    // forEach는 함수를 실행하는데, array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜 줌.
    // 각각을 toDo라고 칭한다.
    // forEach안에 함수를 바로 작성해도 되고, 밖에서 작성한 후 함수 호출 해주어도 된다. 
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  console.log('init');
  toDoForm.addEventListener("submit", handleSubmit);
}
init();




```



### 5. clock.js

```js
// querySelector는 element의 자식을 탐색, .js-clock 클래스의 자식을 탐색? 
const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  // ternary operator => 작은 if, 삼항연산자 
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes } : ${seconds < 10 ? `0${seconds}` : seconds}`;
}
function init() {
  getTime();
  // setInterval(함수, 간격 ms) 
  setInterval(getTime, 1000);
}
init();
```



### 6. bg.js

```js
const body = document.querySelector("body");
// Math.random() * 5 => 0~4 사이 수 랜덤 
// math.floor(3.9) -> 3 // 내림 
// Math.ceil(3.9) -> 4 // 올림 

const IMG_NUMBER = 3;

// function handleImgLoad(){
//   console.log("finished loading");
// }

function paintImage(imgNumber){
  const image = new Image();
  image.src = `./images/${imgNumber+1}.jpg`;
  image.classList.add('bgImg');
  
  // image를 bodyNode의 첫 자식 노드 앞에 삽입한다고 ,, ? 
  // 그래야 이미지가 맨 아래에 깔린다아 ..
  body.prepend(image);
    
  // table listener를 이미지화 하기 위해 event listener를 연결 
  // API 사용할 ㄸㅐ 필요?
  // image.addEventListener("loadend", handleImgLoad);
}

function genRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number
}

function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
```



> **local storage**
>
> =>작은 정보를 사용자 컴퓨터에 저장 
>
> ```js
> - 저장
> 	localStorage.setItem('myCat', 'Tom');
>      => myCat을 Tom 이라고 저장한다. 
> - 읽기
> 	var cat = localStorage.getItem('myCat'); 
>      => 'myCyt'에 담긴 데이터를 가져와서 cat이라는 변수에 저장한다.
> - 삭제 
> 	localStorage.removeItem('myCat');
> - 전체 삭제
> 	localStorage.clear();
> ```



> **classList** 
>
> ```js
> form.classList.remove(SHOWING_CN) => form이라는 element의 클래스에서 SHOWING_CN="showing"을 제거한다. 
> classList.add()/ classList.remove()
> classList.contains() => 값이 존재하는지 체크한다. (true/false)
> classList.toggle() => 클래스값이 있는지 체크하고 없으면 더하고 있으면 제거한다.
> ```



> **JSON**
>
> ```js
> JSON.stringify() => JS 값이나 객체를 JSON 문자열로 반환 
> localStorge의 key, value는 모두 string이기 때문에, object로 저장할 수 없어서 꼭 string으로 변환해주어야 한다. 
> 
> JSON.parse() => JSON 문자열 구문 분석, 결과에서 JS 값이나 객체 생성 
> 이건 localStorage에서 값을 읽을 때 사용 ? 
> ```
>
> 

## PAINT 

### 1. index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css"/>
  <title>PaintJS</title>
</head>
<body>
  <canvas id="jsCanvas" class="canvas"></canvas>
  <div class="controls">
    <div class="controls__range">
      <input type="range" id="jsRange" min="0.1" max="5" value="2.5" step="0.1"/>
    </div>
    <div class="controls__btns">
      <button id="jsMode">Fill</button>
      <button id="jsSave">Save</button>
    </div>
    <div class="controls__colors" id="jsColors">
      <div class="controls__color jsColor" style="background-color: black;"></div>
      <div class="controls__color jsColor" style="background-color: white;"></div>
      <div class="controls__color jsColor" style="background-color: Red;"></div>
      <div class="controls__color jsColor" style="background-color: orange;"></div>
      <div class="controls__color jsColor" style="background-color: yellow;"></div>
      <div class="controls__color jsColor" style="background-color: green;"></div>
      <div class="controls__color jsColor" style="background-color: skyblue;"></div>
      <div class="controls__color jsColor" style="background-color: blue;"></div>
      <div class="controls__color jsColor" style="background-color: blueviolet;"></div>
    </div>
  </div>
  <script src="app.js"></script>
</body>
</html>
```



### 2. style.css

```css
@import "reset.css";
body{
  background-color: aliceblue;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  margin-bottom: 50px;
}

.canvas {
  width: 700px;
  height: 700px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.5), 0 1px 4px rgba(0, 0, 0, 1);
}

.controls{
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.controls .controls__btns{
  margin-bottom: 30px;
}

.controls__btns button{
  all: unset;
  cursor: pointer;
  background-color: white;
  padding: 5px 10px;
  width: 60px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);;
  color: rgba(0, 0, 0, 0.8);
  text-transform: uppercase;
  font-weight: 800;
  font-size: 12px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.5), 0 1px 4px rgba(0, 0, 0, 1);
}

.controls__btns button:active{
  transform: scale(0.98);
}

.controls .controls__colors {
  display: flex;

}

.controls__colors .controls__color {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.5), 0 1px 4px rgba(0, 0, 0, 1);
}

.controls .controls__range {
  margin-bottom: 30px;
}
```



### 3. app.js

```js
const canvas = document.getElementById("jsCanvas");
// canvas의 context는 canvas 안에서 픽셀들을 컨트롤 하는 것 ? 
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE  = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

// canvas fill을 안하면 초기에는 투명색이기 때문에, 하얀색으로 초기화를 해주고 
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

// 처음 paint 하거나 fill 할 때의 초기 컬러는 블랙으로 설정해둔다. 
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

// ctx.fillStyle = "green";
// ctx.fillRect(50, 20, 100, 49);

let painting = false;
let filling = false;

function stopPainting(){
  painting = false;
}

function startPainting(){
  painting = true;
}

function onMouseMove(event){
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting){
    // path ==== line
    // beginPath => Call this method when you want to create a new path.
    ctx.beginPath();
    // moveTo => Moves the starting point of a new sub-path to the (x, y) coordinates.
    ctx.moveTo(x, y);
  } else {
    // lineTo => Connects the last point in the current sub-path to the specified (x, y) coordinates with a straight line.
    ctx.lineTo(x, y);
    // stroke => Strokes the current sub-paths with the current stroke style.
    ctx.stroke();
  }
}

function handleColorClick(event){
  console.log(event.target.style);
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(){
  console.log(event.target.value);
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick(){
  if(filling === true){
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "PAINT";
    // 현재 내가 선택한 색으로 칠한다 
    ctx.fillStyle = ctx.strokeStyle;
  }
}

function handleCanvasClick(){
  if(filling){
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE );
  }
}

function handleCM(event){
  // console.log(event);
  // 우클릭 방지 !! 
  event.preventDefault();
}

function handleSaveClick(event){
  // HTMLCanvasElement.toDataURL() method returns a data URI containing a representation of the image in the format specified by the type parameter 
  // default는 Png
  const image = canvas.toDataURL("image/jpeg");
  // console.log(image);
  // a 태그를 만들고, 그 속성으로 download
  const link = document.createElement("a");
  // href에는 이미지 URL
  link.href = image;
  // download는 저장할 이름 
  link.download = "paintJS";
  link.click();
}

if(canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  // 마우스 오른쪽 버튼 클릭하면 나오는 메뉴바를 contextmenu라고 한다. 
  canvas.addEventListener("contextmenu", handleCM);
}

// Array.from => object로부터 Array를 만든다. 
console.log(Array.from(colors));
// color는 Arrat안에 있는 각각의 아이템들을 대표하는 것 뿐, 다른 이름으로 지정해도 상관없다. 
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if(range){
  range.addEventListener("input", handleRangeChange);
}

if(mode){
  mode.addEventListener("click", handleModeClick);
}

if(saveBtn){
  saveBtn.addEventListener("click", handleSaveClick);
}
```





## JS 핵심컨셉 33

### 1. Call Stack 

=> 자바스크립트가 함수 실행을 핸들하는 방법 중 하나 

=> 자바스크립트는 함수를 스택 위에 올리고, 함수를 다 실행하면 제거 

```js
function three(){
  console.log('I love js');
}

function two(){
  three();  
}

function one(){
  two();
}

function zero(){
  one();
  throw Error("omg");
}
zero();

함수 실행 순서
zero -> one -> two -> three -> three finish -> two finish -> Error
```





