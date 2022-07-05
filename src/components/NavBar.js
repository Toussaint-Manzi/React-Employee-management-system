// import klab from '../img/klab.jpg';
import {Link} from 'react-router-dom';
 
const NavBar = () => {
  return (
    <div className='navBar'>
        {/* <img src={klab} alt="klab" className='klab'/> */}
        <h3>kLab MANAGEMENT SYSTEM</h3>
        <ul className="list">
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/todo">To do</Link></li>
            <li><Link to="/logout">Logout</Link></li> 
        </ul>
    </div>
  )
}

export default NavBar