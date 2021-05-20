import React,{useState} from 'react'

export default function Counter(props) {
    console.log(props);
    const [state, setState] = useState(false)

    const oddIncrease = () => {
        if(props.value%2 !== 0){
            props.onIncrement()
        }
    }
    const timeDelay = () => {
        setTimeout( ()=>{
            props.onIncrement()
        }, 1000)
    }  
    let myTimer;

    const timer = () => {

        if(!state){
            myTimer = setInterval( ()=> {
                props.onIncrement()
            }, 1000)
        } else {
            clearInterval(myTimer);
            
        }
        
    }

    const handleClick = () => {
        setState(prevState => !prevState);
        timer()
    }
    console.log(state)
    
    return (
        <div className="container">
            
            <p>{props.value}</p>

            <button onClick={props.onIncrement}>Increment</button>

            <button onClick={props.onDecrement}>Decrement</button>
            <br />
            <button onClick={oddIncrease}>ODD</button>
            <button onClick={timeDelay}>Time Delay</button>
            <button onClick={handleClick}>Timer</button>
            
        </div>
    )
}