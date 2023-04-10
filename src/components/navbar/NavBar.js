import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>MVsports</h3>
            <div>
                <button>Ropa</button>
                <button>Calzado</button>
                <button>Accesorios</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar