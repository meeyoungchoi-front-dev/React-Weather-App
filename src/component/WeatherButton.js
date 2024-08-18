import React from 'react';
import { Button } from "react-bootstrap";
import "../WeatherButton.css";

const WeatherButton = ({ cities, setCity, getCurrentLocation, buttonActive, setButtonActive }) => {

  // const handleButtonClick = (city) => {
  //   if (city === "current") {
  //     setCity("current");
  //     setButtonActive("current");
  //   } else {
  //     setCity(city);
  //     setButtonActive(city); // 버튼 클릭 시 버튼의 활성화 상태를 설정
  //   }
  // };

  return (
    <div className='buttons'>
      {/* 현재 위치 버튼 */}
      <Button 
        className={`button ${buttonActive === "current" ? "active" : ""}`} 
        onClick={() => { getCurrentLocation(); setButtonActive("current"); }}>
        Current Location
      </Button>

      {/* 도시 리스트에 따라 버튼 생성 */}
      {cities.map((item, index) => (
        <Button 
          className={`button ${buttonActive === item ? "active" : ""}`} 
          key={index} 
          onClick={() => setCity(item)}>
          {item}
        </Button>
      ))}
    </div>
  );
}

export default WeatherButton;
