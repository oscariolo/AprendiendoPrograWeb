import './Styles/Footer.css'
import { ImInstagram } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";

function Footer() {
  
    return(
        <footer className='footer'>
          <a href="https://maps.app.goo.gl/44cNrSh3AujTeALAA" className='footer__direction'>C. Gran Colombia &, Cuenca</a>
          <p>|</p>
          <p>0999528427</p>
          <p>|</p>
          <a href="https://www.instagram.com/rabbitgardencoffeeshop/"><ImInstagram className="footer__icon"></ImInstagram></a>
          <p>|</p>
          <a href="https://www.facebook.com/rabbitgardencoffeeshop"><ImFacebook2 className="footer__icon"></ImFacebook2></a>

        </footer>
    )
  
  }
  export default Footer