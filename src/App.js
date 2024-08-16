import { useEffect} from 'react';
import './App.css';

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      console.log("현재 위치: ", lat, " " , long);
    });

  }
  useEffect(() => {
    getCurrentLocation()

  }, [])
  return (
    <div>
      hi it's weather app
    </div>
  );
}

export default App;
