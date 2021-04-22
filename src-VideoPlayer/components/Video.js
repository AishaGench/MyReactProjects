import React from 'react'

export default function Video(props) {

    return(
        <div>
            <video src= {props.video} width="320" height="240" controls/>
        </div>
    )
    
}