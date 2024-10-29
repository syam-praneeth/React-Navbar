import '../assign-3/Users.css'
import { ImLinkedin } from "react-icons/im";
function Navbar() {
  return (
    <div className='Navbar'>
        <div className="nleft">
            <h1>LinkedIn</h1>
            <ImLinkedin  className='icon'/>
        </div>
        <div className="nright">
            <ul className='ulflex'>
                <li>Home</li>
                <li>SignUp</li>
                <li>Login</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar