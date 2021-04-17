import React, {useState} from "react";
import  Form from './Form';


function App() {
  const [myState, setMyState] = useState(["",[],[],[]]);

  const fetchFunc = (searchKeyword) => {
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchKeyword}&format=json&origin=*&limit=10`;

    fetch(url)
    .then(response => response.json())
    .then(jsonResponse => {
      setMyState(jsonResponse)
    })
    
  }
  console.log(myState)

  return (
    <div className="container">

      <h1>Wikipedia Search with Function Component</h1>
      <Form fetchFunc={fetchFunc}/>
      <ul>
        {myState[3].map((item,index)=>{
          return(
            <a href ={item} key={index} target="_blank" rel="noreferrer"><li>{item}</li></a>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
