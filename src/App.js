import { useEffect, useCallback } from 'react';
import './App.css';

function App() {
  let lat = 0;
  let lon = 0;
  const getCurrentLocation = useCallback(() => {
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
}, []); // 빈 배열로 설정하여 처음 한 번만 함수가 생성되도록 함.useEffect(() => {


  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=debf57bfca72919d88e06dacb4bf18c7`
    let response = await fetch(url)
    let data = await response.json();
    console.log("data", data);
  } 

  useEffect(() => {
    getCurrentLocation();
  }, [lat, lon]);

  return (
    <div>
      hi weather app
    </div>
  );
}

export default App;
