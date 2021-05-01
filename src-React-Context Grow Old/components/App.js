import React, {useState} from 'react';
import MyContext from '../context/MyContext';
import Family from "./Family"
import "./App.css"

function App() {
  // const [name, setName] = useState("John")
  // const [age, setAge] = useState(33)

  const [myState, setMyState] = useState({name:"John", age:33});

  const growOlder = () => {
    setMyState({...myState, age: myState.age+1})
  }

  console.log(myState.age)
  return (
    <MyContext.Provider value={{myState, growOlder}}>
      <div className="App">
          <p>I am the app</p>
          {/* <button onClick={growOlder}>try</button> */}
          <Family />
        </div>
    </MyContext.Provider>
  )
}

export default App;