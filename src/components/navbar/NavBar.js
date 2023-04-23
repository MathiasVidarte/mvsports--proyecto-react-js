import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">MVsports</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to={`/`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/botines`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Botines</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/calzado`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Calzado</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/sale`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Sale</NavLink>
            </li>
          </ul>
        </div>
        <CartWidget/>
      </div>
    </nav>
  );
}

export default NavBar;
