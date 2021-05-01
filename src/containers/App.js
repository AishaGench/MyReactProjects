import React, {useState} from "react";
import CityList from './CityList';
import AddCityButton from './AddCityButton';
import TemperatureAverage from './TemperatureAverage';
import { WeatherContext } from "../context/WeatherContext";


function App() {
  const [cities, setCities] = useState([])
  const addCity =(name, temperature)=>{
    // setCities(prevCities => [...prevCities, { name, temperature }]);
    setCities([...cities, {name : name, temperature : temperature} ])

  }

  return (
    <WeatherContext.Provider value={{cities, addCity}}>
      <div className="city-overview">
        <h2>Multi-Weather App</h2>
        <CityList/>
        <AddCityButton/>
        <TemperatureAverage/>
      </div>
      </WeatherContext.Provider>
  );
}


export default App;
