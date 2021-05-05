import React, {useContext} from 'react';
import {WeatherContext} from '../context/WeatherContext'

const TemperatureAverage = () => {

  const {cities} = useContext(WeatherContext)

  let total = 0;
 
   for (const city of cities) {
 
    total += city.temperature
    console.log(total)
 
   }
   let average = total / cities.length

    // const cities = [{
    //   name: "london",
    //   temperature: 7
    // }]
if(cities.length === 0){
  return <div>Enter city info to see the temperature. info!!!</div>
}else{
  return (
    <div>
      The average is {average.toFixed(2)} degrees Celcius.
    </div>
  );

}
    

    
};

  export default TemperatureAverage;
