let result; //store result of json
   /* FETCH ALL HTML DOCUMENT NEEDED*/
   let icon = document.querySelector('.img');
   let degree = document.querySelector('.degree');
   let weatherType = document.querySelector('.weather-type');
   let humidity = document.querySelector('.humidity');
   let wind = document.querySelector('.ws');
   
   let mycountry = document.querySelector('.co');
   
class Weather {
  constructor(country) {
    if(country) {
      this.country = country;
      mycountry.innerHTML = country;
    }
    else {
      this.country = "London";
    }
  }
  setCountry(country) {
    this.country = country;
  }
  getCountry() {
    return country;
  }
  
  //fetch api using country
  fetchWeatherInfo() {
    if(country) {
      console.log('Country: ',country.value);
      let key = '53b1e8acf21399ed870cbe9fec7aa0b5';
      const fetchAPI = async() => {
        try {
        console.log('yo',key);
         const getapi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.value}&appid=${key}`, {
           headers: {
             Accept:'application/json'
           }
         });
          result = await getapi.json();
          console.log('ye',result);
        }
        catch(error) {
          console.log(error);
         }
       };
       fetchAPI();
     }
   }
  
  updateHTMLPage(apiResult) {
    let main = apiResult.main;
    console.log(main);
    
    let weather = apiResult.weather[0];
    console.log(weather);
    
    let apiWind = apiResult.wind;
    
    degree.innerText = main.temp;
    humidity.innerText = main.humidity;
    wind.innerText = apiWind.speed;
    
    weatherType.innerText = weather.description;
    //console.log(weather[0])
    icon.setAttribute('src',`https://openweathermap.org/img/wn/${weather.icon}@4x.png`);
   
   
   humidity.classList.add('r'); //add percent symbol from css
   wind.classList.add('j');
    return;
  }
}

const weatherlocation = document.getElementById('country');
//initial
let weather = new Weather(weatherlocation.value);
weather.fetchWeatherInfo();
setTimeout(() => {
  weather.updateHTMLPage(result);
},2000);


weatherlocation.addEventListener('change', () => {
  //updates weather location
    weather = new Weather(weatherlocation.value);
    console.log(weatherlocation.value);
});

const search = document.querySelector('.search');
search.addEventListener('click', () => {
   weather.fetchWeatherInfo();
   
   
    mycountry.innerText = weatherlocation.value;
   /*pass to class function in order to update HTML page */
   setTimeout(() => {
    console.log('yeah', result);
    weather.updateHTMLPage(result);
    }, 2000);
});