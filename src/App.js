import { useEffect } from 'react';
import './App.css';

function App() {
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
          console.log("현재 위치: ", lat, " ", long);
        },
        (error) => {
          console.error("위치 정보를 가져오지 못했습니다: ", error.message);
        }
      );
    } else {
      console.error("이 브라우저에서는 Geolocation이 지원되지 않습니다.");
    }
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      hi it's weather app
    </div>
  );
}

export default App;
