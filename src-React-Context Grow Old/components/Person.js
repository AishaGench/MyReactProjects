import React, {useContext} from "react";
import MyContext from "../context/MyContext"


const Person = () => {


  const context = useContext(MyContext)

  // console.log(context.myState.name)


  return (
    <div className="person">
      <p>Age: {context.myState.age}</p>
      <p>Name: {context.myState.name}</p>
      <button onClick={context.growOlder}>🍰🍥🎂</button>
    </div>
  );
};

export default Person;
