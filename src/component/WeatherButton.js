import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity, selectedCity }) => {
  console.log("cities?", cities);

  return (
    <div>
       {/* 현재 위치 버튼 */}
       <Button 
         className="mt-5 me-1" 
         variant={selectedCity === null ? "success" : "warning"} 
         onClick={() => setCity(null)}>Current Location</Button>

       {/* 도시 리스트에 따라 버튼 생성 */}
       {cities.map((item, index) => (
         <Button 
           className="mt-5 me-1" 
           variant={selectedCity === item ? "success" : "warning"} 
           key={index} 
           onClick={() => setCity(item)}>
           {item}
         </Button>
       ))}
    </div>
  )
}

export default WeatherButton;
