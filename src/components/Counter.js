import React, {useState} from 'react'

export default function Counter(props){
    const [state, setState] = useState(false)
}

return(
    <div className = 'container'>
        <p>{props.value}</p>
        <button onClick ={props.onIncrement}>Increment</button>
        <button onClick ={props.onDecrement}>Decrement</button>
        <br/>


    </div>
)