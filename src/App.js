import React from 'react';
import Navigation from './components/Navigation/Navigation';
import SaladMaker from './components/SaladMaker/SaladMaker';
import UserContext from './context/UserContext'

const user = {
  name: 'Aysegul Genc',
  favorites: ['avocado', 'carrot' ]
}

function App() {
  return (
    <>
    <UserContext.Provider value ={user}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>
    </>
  );
}

export default App;