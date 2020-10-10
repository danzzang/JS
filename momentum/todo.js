const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

// toDos는 이따가 바꿔줄꺼니까 let으로 놓자 
let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  // toDos arrat에서 filterFn에 true인 애들만 반환 
  // filter는 array의 모든 아이템을 통해 함수를 실행하고 true인 아이템들만 가지고 새로운 array를 만든다. 
  const cleanToDos = toDos.filter(function(toDo) {
    // li.id에 없는건 toDos array에서도 제거할 것 이다.
    // toDo.id => int, li.id => string 이여서 parseInt, parseInt는 string을 int로 바꿀 수 있다. 
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
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
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
  const loadedtoDos = localStorage.getItem(TODOS_LS);
  if (loadedtoDos !== null){
    // JSON +> Javascript Object Notaion 
    // 데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능 
    // 자바스크립트 object를 string으로 변환해주기도 하고, string을 object로 변환해줄 수도 있음. 
    const parsedToDos = JSON.parse(loadedtoDos);
    // forEach는 함수를 실행하는데, array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜 줌.
    // 각각을 toDO라고 칭한다.
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



