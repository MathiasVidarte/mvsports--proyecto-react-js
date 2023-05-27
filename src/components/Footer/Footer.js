import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css'; 

function Footer() {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="https://twitter.com"><FaTwitter/></a>
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
      </div>
      <div className='links'>
        <p>Nosotros</p>
        <p>Locales</p>
        <p>Contacto</p>
      </div>
      <p>© 2023 MVsports, Inc. Todos los derechos reservados.</p>
    </div>
  );
}

export default Footer;
