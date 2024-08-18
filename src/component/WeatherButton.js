import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity}) => {
  console.log("cities?", cities);

  return (
    <div>
       <Button className="mt-5 me-1" variant="warning" onClick={() => setCity('')}>Current Location</Button>
       {cities.map((item, index) => (
        <Button className="mt-5 me-1" variant="warning" key={index} onClick={() => setCity(item)}>{item}</Button>
       ))}
    </div>
  )
}

export default WeatherButton
