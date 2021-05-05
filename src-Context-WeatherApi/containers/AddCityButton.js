import React, { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";




const AddCityButton = () => {

  const apiKey = "83b4aad3d29013002c4150fab55181ee";



  const context = useContext(WeatherContext);
  const [name, setName] = useState('');

  const submitCity = () => {
    // context.addCity(name, Math.floor(Math.random() * 100).toFixed(2))
      fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${name}`)
      .then((response) => { return response.json()})
      .then((jsonResponse) => { 
        console.log(jsonResponse)
        return context.addCity(name, jsonResponse.current.temperature)})
        .catch((err) => {console.log(err)})
      setName('')
  }

    


    return (
      <div className="add-city-form">
        <input value={name} onChange={(event) => setName(event.target.value)} className="input" />
        <button onClick={submitCity} className="input" >Add</button>
      </div>
    );
  };

  export default AddCityButton;
