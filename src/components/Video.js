import React from 'react'

export default function Video(props) {

    return(
        <div>
            <video videoSrc= {props.video}/>
        </div>
    )
    
}