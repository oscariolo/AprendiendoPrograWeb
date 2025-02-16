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
              <li>
                Home
              </li>
              <li>
                Log in
              </li>
              <li>
                <FaShoppingCart></FaShoppingCart>
              </li>
            </ul>
          </nav>
        </header>
    )
  
  }
export default Header