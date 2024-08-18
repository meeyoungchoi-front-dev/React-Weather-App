import { useCallback, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const cities  = ['paris', 'new york', 'los angeles', 'tokyo', 'seoul', 'incheon', 'busan'];
  let [loading, setLoading] = useState(false);
  const [buttonActive, setButtonActive] = useState('current');
  let [color] = useState("#ff0000");

  useEffect(() => {
    getCurrentLocation();
  }, []);

//  const getCurrentLocation = useCallback(() => {
//   navigator.geolocation.getCurrentPosition((position)=>{
//     let lat = position.coords.latitude
//     let lon = position.coords.longitude
//     setButtonActive(true);
//     getWeatherByCurrentLocation(lat, lon)});
// }, []);

const getCurrentLocation = async () => {
  if (!navigator.geolocation) {
    alert("위치 서비스를 지원하지 않습니다.");
    return;
  }
  setLoading(true);
  setButtonActive("Current Location");
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude: lat, longitude: lon } = position.coords;
      await getWeatherByCurrentLocation(lat, lon);
    },
    (error) => {
      alert("위치 정보를 가져올 수 없습니다. 다시 시도해주세요.");
      setLoading(false);
    }
  );
};


  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=debf57bfca72919d88e06dacb4bf18c7&units=metric`;
    try {
      setLoading(true);
      setCity("current");
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();  // json() 메서드 호출
      console.log("Weather Data:", data);  // JSON 응답을 콘솔에 출력
      setWeather(data);
      setLoading(false); 
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };

  const getWeatherByCity = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=debf57bfca72919d88e06dacb4bf18c7&units=metric`;
    try {
      setLoading(true);
      setButtonActive(city);
      setCity(city);
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();  // json() 메서드 호출
      console.log("Weather Data:", data);  // JSON 응답을 콘솔에 출력
      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };

  return (
    <div>
      {loading? <div className="container">
                  <ClipLoader
                    color={color}
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>  
      :  <div className='container'>
            <WeatherBox weather={weather}/>
            <WeatherButton cities={cities} setCity={getWeatherByCity} getCurrentLocation={getCurrentLocation} buttonActive={buttonActive} setButtonActive={setButtonActive}/>
          </div>}
    </div>
  );
}

export default App;
