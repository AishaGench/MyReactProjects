import React, {useState}from 'react'

function Form(props){

    const [element, setElement] = useState("")

    const handleChange=(e)=>{
        setElement(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.fetchFunc(element)

    }

    return(

        <div>
            <form >
                <input type="text" onChange={handleChange} />
                <button onClick = {handleSubmit}>Search</button>
            </form>
        </div>

    )

}
export default Form;

