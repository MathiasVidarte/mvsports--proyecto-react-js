import React, { useContext } from "react";
import cart from "./assets/cart.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  console.log("Total Quantity:", totalQuantity);

  return (
    <div>
      <Link
        to="/Cart"
        className="CartWidget"
        style={{ display: totalQuantity > 0 ? "block" : "none" }}
      >
        <img src={cart} alt="cart-widget" />
        {totalQuantity} {/* Mostrar la cantidad de elementos en el carrito */}
      </Link>
    </div>
  );
};

export default CartWidget;


