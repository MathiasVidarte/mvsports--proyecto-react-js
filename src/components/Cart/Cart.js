import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";



const Cart = () => {
  const { cart, clearCart, totalQuantity, getTotal } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/" className="btn-link">
          Productos
        </Link>
      </div>
    );
  }

  
  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <div>
          <h1>No hay items en el carrito</h1>
          <Link to="/" className="btn btn-dark cart-button">Ver Productos</Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((p) => (
              <CartItem key={p.id} {...p} className="cart-item" />
            ))}
          </div>
          <h3 className="cart-total">Total: ${getTotal()}</h3>
          <div className="cart-buttons">
            <button onClick={() => clearCart()} className="btn btn-secondary cart-button">
              Limpiar Carrito
            </button>
            <Link to="/checkout" className="btn btn-success cart-button">
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
  
  }  

export default Cart;
