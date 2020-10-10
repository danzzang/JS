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