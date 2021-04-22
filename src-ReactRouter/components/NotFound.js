import {Link} from 'react-router-dom'
export default function NotFound() {
    return(
        <div >
            <h3 style={{color:'red'}}>Error 404! Page Not Found!</h3>
            <Link to='/'>Go back to Home Page</Link>
        </div>
    )
}