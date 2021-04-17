import React, {useState}from 'react'

function Form(props){

    const [search, setSearch] = useState("")

    const handleChange=(e)=>{
        setSearch(e.target.value);
    }

    const handleSubmit = () =>{
        props.fetchFunc(element)

    }

    return(

        <div>
            <form onSubmit = {onFormSubmit}>
                <label htmlFor ="search">Search</label>
                <input type="text" name="search" id="search" value={search} onChange={handleChange} />
                <button onClick = {handleSubmit}>Submit</button>
            </form>
        </div>

    )

}
export default Form;

