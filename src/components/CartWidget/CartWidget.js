import React from "react";
import cart from "./assets/cart.png";

const CartWidget = ({ itemCount }) => {
  return (
    <div>
      <img src={cart} alt="cart-widget" />
      {itemCount}
    </div>
  );
};

export default CartWidget;
