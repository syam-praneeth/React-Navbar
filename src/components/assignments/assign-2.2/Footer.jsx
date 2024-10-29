import '../assign-3/Users.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="left">
            <ul>
                <li className='ulbold'>General</li>
                <ul>
                    <li>SignIn</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Help Center</li>
                    <li>Careers</li>
                </ul>
            </ul>
        </div>
        <div className="right">
            <ul>
                <li className='ulbold'>Browse LinkedIn</li>
                <ul>
                    <li>Learning</li>
                    <li>Games</li>
                    <li>Salary</li>
                    <li>Development</li>
                    <li>Studies</li>
                </ul>
            </ul>
        </div>
    </div>
  )
}

export default Footer;