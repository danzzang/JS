// querySelector는 찾은 것의 첫번째 것을 가져옴
// querySelectorAll은 클래스명에 따른 모든 엘리먼트들을 가져와서 array로 준다. 
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

// local stage => 작은 정보를 유저 컴퓨터에 저장하는 방법 

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
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
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

// classList로 클래스를 제어한다.
// form.classList.remove(SHOWING_CN) => form이라는 element의 클래스에서 SHOWING_CN="showing"을 제거한다. 
// classList.add()/ classList.remove()
// classList.contains() => 값이 존재하는지 체크한다. (true/false)
// classList.toggle() => 클래스값이 있는지 체크하고 없으면 더하고 있으면 제거한다.
 
function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
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