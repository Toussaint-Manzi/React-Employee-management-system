import klab from '../img/klab.jpg';
import {Link} from 'react-router-dom';
 
const NavBar = () => {

  const handleLogout = () =>{
    localStorage.clear();
    window.location.replace("http://localhost:3000")
  }

  return (
    <div className='navBar'>
        <img src={klab} alt="klab" className='klab'/>
        <h3 className='headerTitle'>EMPLOYEE MANAGEMENT SYSTEM</h3>
        <ul className="list">
            <li><Link to="/" className='link'>Register</Link></li>
            <li><Link to="/adminlogin" className='link'>Admin Login</Link></li>
            <li><Link to="/todo" className='link'>Employee Tasks</Link></li>
            <li><Link to="/logout" className='link' onClick={handleLogout}>Logout</Link></li> 
        </ul>
    </div>
  )
}

export default NavBar