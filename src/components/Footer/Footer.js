import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css'; 
function Footer() {
  return (
    <div className="footer">
      <div>
      <div className="social-icons">
         <link to="https://twitter.com"><FaTwitter/></link>
        <link to="https://facebook.com"><FaFacebook /></link>
        <link to="https://instagram.com"><FaInstagram /></link>
       </div>
       <div className='links'>
        <p>Nosotros</p>
        <p>Locales</p>
        <p>Contacto</p>
        </div>
       
       </div>
      <p>© 2023 MVsports, Inc. Todos los derechos reservados.</p>
    
     
    </div>
  );
}

export default Footer;
