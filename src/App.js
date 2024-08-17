import { useEffect } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

function App() {
  let lat = 0;
  let lon = 0; 

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          lat = position.coords.latitude;
          lon = position.coords.longitude;
          console.log("현재 위치: ", lat, " ", lon);
          getWeatherByCurrentLocation(lat, lon);
        },
        (error) => {
          console.error("위치 정보를 가져오지 못했습니다: ", error.message);
        }
      );
    } else {
      console.error("이 브라우저에서는 Geolocation이 지원되지 않습니다.");
    }
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=debf57bfca72919d88e06dacb4bf18c7`;
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();  // json() 메서드 호출
      console.log("Weather Data:", data);  // JSON 응답을 콘솔에 출력
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };


  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <WeatherBox/>
      <WeatherButton/>
    </div>
  );
}

export default App;
