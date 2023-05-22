import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(quantity);
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button type="button" className="btn btn-primary" onClick={decrement}>
          -
        </button>
        <h4 className="Number">{quantity}</h4>
        <button type="button" className="btn btn-primary" onClick={increment}>
          +
        </button>
      </div>
     
      <br/>
     
      <div>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddToCart}
          disabled={stock === 0}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
