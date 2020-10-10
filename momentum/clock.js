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


