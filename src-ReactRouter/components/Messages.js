import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import Message from './Message'

export default function Messages(props) {
    return(
        <div><h3 style={{color:'rosybrown'}}>This is my Messages page!</h3>
        <ul>
       <Link to= '/messages/1' > <li key="1">Message Number - 1 </li></Link>
       <Link to= '/messages/2'> <li key="2">Message Number - 2 </li></Link>
        <Link to= '/messages/3'><li key="3">Message Number - 3 </li> </Link>
        </ul>
        <Switch>
            <Route path="/messages/:id" exact component = {Message}/>
            <Route path={this.props.match.url} render={() => <h3>Please select a message</h3>}
></Route>
        </Switch>
        </div>
    )
}