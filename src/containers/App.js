import React, {useState} from "react";


function App() {
  const [cities, setCities] = useState([])
  const addCity =(name, temperature)=>{
    setCities(prevCities => [...prevCities, { name, temperature }]);

  }

  return (
      <div className="city-overview">
        <h2>Multi-Weather App</h2>
      </div>
  );
}


export default App;
