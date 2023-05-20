import React from "react";
import cart from "./assets/cart.png";
import { Link } from "react-router-dom";

const CartWidget = ({ itemCount }) => {
    return (
      <div>
        <Link to="/Cart">
          <img src={cart} alt="cart-widget" />
        </Link>
        {itemCount}
      </div>
  );
};

export default CartWidget;
