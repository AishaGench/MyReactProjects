import React, {useState} from "react";
import  Form from './Form';


function App() {
  const [data,setData] = useState(['',[],[],[]]);

  const fetchFunc = (searchKeyWord) => {
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${data}&format=json&origin=*&limit=10`;

    fetch(url)
    .then((response) => {response.json()})
    .then((response) => {setsearchKeyWord(response)})
    
  }

  return (
    <div className="container">
      <h1>Wikipedia Search with Function Component</h1>
      <Form fetchFunc={fetchFunc}/>
      <ul>
        {data[3].map((entry,index)=>{
          return(
            <a href = {entry} target="_blank" rel="noreferrer" key={index}>
              <li>{entry}</li>
            </a>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
