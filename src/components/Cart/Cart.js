import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, totalQuantity, getTotal } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/" className="btn-agregar">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3>Total: ${getTotal()}</h3> {/* Utilizar la función getTotal para calcular el total */}
      <button onClick={() => clearCart()} className="btn-agregar">
        Limpiar Carrito
      </button>
      <Link to="/checkout" className="btn-agregar">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
