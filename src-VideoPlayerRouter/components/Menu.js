import React from 'react'
import {Link,Route} from 'react-router-dom'
import Video from './Video'

export default function Menu() {
    return (
        <div>
            <ul>
                <li><Link to='/fast'>Fast</Link></li>
                <li><Link to='/slow'>Slow</Link></li>
                <li><Link to='/cute'>Cute</Link></li>
                <li><Link to='/eek'>Eek</Link></li>
            </ul>
            <Route path='/:type' component={Video}/>
        </div>
    )
}