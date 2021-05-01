import React from 'react'

export const WeatherContext = React.createContext({
    cities: [],
    addCity: (name, temperature) => { },
});
  