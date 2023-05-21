import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
const NavBar = () => {
 
    
    
      return (
        <nav className="mi-navegacion navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <h3>
            <NavLink exact="true" to={`/`} className="navbar-brand">MVsports</NavLink>
            </h3>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to={`/`} className="nav-link">Inicio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={`/category/vestimenta`} className="nav-link">Vestimenta</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={`/category/calzado`} className="nav-link">Calzado</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={`/category/accesorios`} className="nav-link">Accesorios</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={`/category/sale`} className="nav-link">Sale</NavLink>
                </li>
              </ul>
            </div>
            <Link to="/cart"></Link>
            <CartWidget />
          </div>
        </nav>
      );
    }
    


export default NavBar;
