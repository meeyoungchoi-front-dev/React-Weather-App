import React from 'react'


const WeatherBox = ({weather}) => {
 console.log("weather " , weather);
 // 섭씨를 화씨로 변환하는 함수
 const convertToFahrenheit = (celsius) => {
    console.log("celsius" , celsius);
    return (celsius * 9 / 5) + 32;
 };

  // `weather.main.temp`가 섭씨 온도일 경우에 사용
  let tempCelsius = weather?.main?.temp; 
  // 섭씨 온도를 가져온다고 가정
  let tempFahrenheit = tempCelsius ? convertToFahrenheit(tempCelsius).toFixed(2) : '';



  return (
    <div className='weather-box'>
      <div>
         {weather?.name}   
      </div>
      <h2>{weather?.main.temp}C / {tempFahrenheit}화씨</h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox
