const API_KEY = "";
const COORDS = 'coords';
const weather = document.querySelector(".js-weather");

function getWeather(lat, lng){
  // 데이터를 얻을 때에는 fetch 사용, fetch안에는 가져올 데이터 넣고, 앞에 https:// 넣어주어야 한다. 
  // 따옴표가 아닌 백틱 사용할 것. 
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function(response){
      return response.json();
  })
    .then(function(json){
      console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature}@${place}`
  });
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj); 
  getWeather(latitude, longitude);
}

function handleGeoError(){
  console.log('Cant access geo location');
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askForCoords();
  } else {
    // getWeather
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);    
  }
} 

function init(){
  loadCoords();
}
init();
