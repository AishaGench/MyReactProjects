import React from 'react'

export default function Menu(props) {
    return(
        <div>
            <form>
                <input type='radio' name='video' onClick={()=>props.chooseVideo('fast')}/>FAST
                <input type='radio' name='video' onClick={()=>props.chooseVideo('slow')}/>SLOW
                <input type='radio' name='video' onClick={()=>props.chooseVideo('cute')}/>CUTE
                <input type='radio' name='video' onClick={()=>props.chooseVideo('eek')}/>EEK
                
            </form>
        </div>
    )
    
}