import CartWidget from "./CartWidget/CartWidget"
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
    return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">MVsports</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href="#">Vestimenta</a>
              <a class="nav-link" href="#">Calzado</a>
              <a class="nav-link" href="#">Accesorios</a>
              <a class="nav-link" href="#">Sale</a>
            </div>
          </div>
          <CartWidget/>
        </div>
      
        
      
     </nav>
    )
}

export default NavBar