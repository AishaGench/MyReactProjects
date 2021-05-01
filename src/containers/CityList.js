import React from "react";


const CityList = () => {
  
    return (
      <table className="city-list">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>
            <tr >
              <td>city.name</td>
              <td>city.temperature</td>
            </tr>
        </tbody>
      </table>
    );
  };

  export default CityList;
