import LoginControl from '../loginButton/LoginButton'
import './navbar.sass'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav-row'>
          <a href='./index.html' className='logo'>
            <img src='https://www.squadhelp.com/img/logo.png ' alt='' />
          </a>

          <LoginControl />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
