import './Header.scss'
import logo from '../../assets/logo.png'

function Header() {
    return (
      <div className="header">
          <img className="header__logo" src={logo} alt='fetch logo,outline of dog jumping over the word fetch'/>
        <div className="header__div">
            <h2 className="header__div--button">Sign Up</h2>
            <h2 className="header__div--button">Login</h2>
        </div>
      </div>
    );
  }
  
  export default Header;
  