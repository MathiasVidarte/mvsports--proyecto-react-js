import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css'; 
function Footer() {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="https://twitter.com"><FaTwitter /></a>
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
      </div>
    </div>
  );
}

export default Footer;
