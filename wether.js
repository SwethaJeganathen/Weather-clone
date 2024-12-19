const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector(`.not-found`);
const cityHide = document.querySelector('.city-hide');

search.addEventListener('click' , () => {
  const APIkey ="e27067510d60ee9ba86aa609238241ba ";
  const city = document.querySelector('.serach-box input').Value;
  if (city == '')
    return;
  fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={"e27067510d60ee9ba86aa609238241ba"}`).then(response => response.json()).then(json =>{
    if(json.cod == '404') {
      cityHide.textContent = city;
      
      container.computedStyleMap.height = '400px';
      weatherBox.classList.remove('active');
      weatherDetails.classList.remove('active');
      error404.classList.add('active');
      return;
    }
    const image = document.querySelector('.weather-box img');
    const temperature = document.querySelector('.weather-box .temperature');
    const description= document.querySelector('.weather-box .description');
    const humidity= document.querySelector('.weather-details .humidity span');
    const wind= document.querySelector('.weather-details .wind span');
    if (cityHide.textContent == city) {
      return;
    }
    else{
      cityHide.textContent = city;
      container.style.height = '555px';
      container.classList.add('active');
      weatherBox.classList.add('active');
      weatherDetails.classList.add('active');
      error404.classList.remove('active');
      setTimeout(() => {
        container.classList.remove('active');
      }, 2500);
      switch (json.weather[0].main) {
        case 'Clear':
          image.src = image/clear.png ;
        break;
        case 'Rain':
          image.src = image/rain.png ;
        break;
        case 'Snow':
          image.src = image/snow.png ;
        break;
        case 'Clouds':
          image.src = image/cloud.png ;
        break;
        case 'Mist':
          image.src = image/mist.png ;
        break;
        case 'Haze':
          image.src = image/mist.png ;
        break;
        default:
          image.src = '/weather image/cloud.png';
      }
      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML =`${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
      const infoweather = document.querySelector('.info-weather');
      const infohumidity = document.querySelector('.info-humidity');
      const infowind = document.querySelector('.info-wind');

      const elCloneInfoWeather = infoweather.cloneNode(true);
      const elCloneInfohumidity = infohumidity.cloneNode(true);
      const elCloneInfoWind = infowind.cloneNode(true);

      elCloneInfoWeather.id = 'clone-info-weather';
      elCloneInfoWeather.classList.add('active-clone');

      elCloneInfohumidity.id = 'clone-info-humidity';
      elCloneInfohumidity.classList.add('active-clone');

      elCloneInfoWind.id = 'clone-info-wind';
      elCloneInfoWind.classList.add('active-clone');

      setTimeout(() => {
        infoweather.insertAdjacentElement("afterend" ,elCloneInfoWeather);
        infohumidity.insertAdjacentElement("afterend" ,elCloneInfohumidity);
        infowind.insertAdjacentElement("afterend" ,elCloneInfoWind);
      },2200);

      const CloneInfoWeather = document.querySelectorAll('.info-weather.active-clone');
      const totalcloneInfoWeather = CloneInfoWeather.length;
      const CloneInfoWeatherFirst = CloneInfoWeather[0];

      const CloneInfoHumidity = document.querySelectorAll('.info-humidity.active-clone');
      const CloneInfoHumidityFirst = CloneInfoHumidity[0];

      const CloneInfoWind = document.querySelectorAll('.info-wind.active-clone');
      const CloneInfowindFirst = CloneInfoWind[0];

      if (totalcloneInfoWeather > 0) {
        CloneInfoWeatherFirst.classList.remove('active-clone');
        CloneInfoHumidityFirst.classList.remove('active-clone');
        CloneInfowindFirst.classList.remove('active-clone');

        setTimeout(() => {
          CloneInfoWeatherFirst.remove();
          CloneInfoHumidityFirst.remove();
          CloneInfowindFirst.remove();
        }, 2200);
      } 
    }
  });
});