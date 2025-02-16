import { FaShoppingCart } from "react-icons/fa";
import logo from '../assets/logo.png'
import './Styles/Header.css'

function Header() {

    return (
        <header className='header'>
          <img className='logo__image' src={logo} alt="rabbit garden logo"></img>
          <h1 className='header__title'>Rabbit Garden Shop</h1>
          <nav className='header__nav'>
            <ul className='header__options'>
              <li><button className="header__home">Home</button></li>
              <li><button className="header__login">Login</button></li>
              <li><button className="header__shopping-cart"><FaShoppingCart className="header__shopping-cart-icon"></FaShoppingCart></button></li>
            </ul>
          </nav>
        </header>
    )
  
  }
export default Header