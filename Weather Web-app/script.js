const showFinal = document.getElementById('weather-body');
const getBody = document.querySelector('body');



function giveData(){

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } 

      else {
       alert("Your location isn't available to us and we cannot show weather data")
      }

      function showPosition(positions) {
        var lat=positions.coords.latitude;
        var long=positions.coords.longitude;

        //console.log(lat,long);
        arrangeApi(lat,long);
      }


}

function arrangeApi(latitude,longitude) {
  const apiKey="9cde11b82b4efe17f8560ddb3a935587";
  const api="https://api.openweathermap.org/data/2.5/weather?lat=latitude&lon=longitude&appid=apiKey";
  const firstHalfApi ="https://api.openweathermap.org/data/2.5/weather?lat=";
  const secondHalfApi="&lon=";
  const thirdHalfApi="&appid=";
  const fullAPI= firstHalfApi+latitude+ secondHalfApi+longitude+thirdHalfApi+apiKey;
 //console.log(fullAPI);
  retData(fullAPI);
}

async function retData(fullAPi){
 const apiUrlData = await fetch(fullAPi);
 const DataApi = await apiUrlData.json();
 //console.log(DataApi);


 showData(DataApi);
}

function showData(DataWeather){
 console.log(DataWeather);
 const {main,wind,sys} = DataWeather;

 console.log(main);
 console.log(main.feels_like);
 var finalTemp = parseInt(main.feels_like-273.15);
 console.log(main.humidity);
 console.log(DataWeather.name);
 console.log(DataWeather.weather[0].main);
 console.log(DataWeather.weather[0].description);
 console.log(wind);
 console.log(wind.speed);
 console.log(sys.sunrise);
 console.log(sys.sunset);
 console.log(DataWeather.weather[0].icon);
 var imageicon= DataWeather.weather[0].icon;
 var sunriseTime= sunrise(sys.sunrise);
 var sunsetTime= sunset(sys.sunset);

console.log(sunriseTime);
console.log(sunsetTime);


showFinal.innerHTML=`
<div class="city-name">
                <h3 class="text-white">${DataWeather.name}</h3>
            </div>
            <div class="weather-icon">
                <img src="http://openweathermap.org/img/wn/${imageicon}@2x.png" alt="">
            </div>
            
            <div class="weather-main">
                <h3 class="text-white">${DataWeather.weather[0].main}</h3>
            </div>
            <div class="weather-data">
                <h3 class="text-white">${finalTemp}<sup>&#176</sup>C</h3>
            </div>
            <div class="weather-description">
                <h3 class="text-white">${DataWeather.weather[0].description}</h3>
            </div>
            <div class="weather-humidity">
                <h5 class="text-white">Humidity - ${main.humidity}</h5>
            </div>
            <div class="weather-wind">
                <h5 class="text-white">Wind-Speed - ${wind.speed}</h5>
            </div>
            <div class="weather-sunrise">
                <h5 class="text-white">SunRise - ${sunriseTime}</h3>
            </div>
            <div class="weather-sunset">
                <h5 class="text-white">SunSet - ${sunsetTime}</h3>
            </div>
`;


function sunrise(datae){
    var date = new Date(datae * 1000);
    var timestr = date.toLocaleTimeString();
  
    //console.log(timestr);
    return timestr;
  }
  
  function sunset(dat){
    var date = new Date(dat * 1000);
    var timestr = date.toLocaleTimeString();
  
    //console.log(timestr);
    return timestr;
  }
}

