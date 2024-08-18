import { useCallback, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

function App() {
const [weather, setWeather] = useState(null);
const [city, setCity] = useState('');
const cities  = ['paris', 'new york', 'tokyo', 'seoul', 'incheon'];
//  const getCurrentLocation = () => {
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//      let lat = position.coords.latitude;
//      let lon = position.coords.longitude;
//       console.log("현재 위치: ", lat, " ", lon);
//       getWeatherByCurrentLocation(lat, lon);
//     });
//  }

 const getCurrentLocation = useCallback(() => {
  navigator.geolocation.getCurrentPosition((position)=>{
    let lat = position.coords.latitude
    let lon = position.coords.longitude
    getWeatherByCurrentLocation(lat, lon)});
}, []);

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=debf57bfca72919d88e06dacb4bf18c7&units=metric`;
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();  // json() 메서드 호출
      console.log("Weather Data:", data);  // JSON 응답을 콘솔에 출력
      setWeather(data);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=debf57bfca72919d88e06dacb4bf18c7&units=metric`;
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();  // json() 메서드 호출
      console.log("Weather Data:", data);  // JSON 응답을 콘솔에 출력
      setWeather(data);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  }

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [getCurrentLocation, city]);

  return (
    <div>
      <div className='container'>
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity}/>
      </div>
      
    </div>
  );
}

export default App;
