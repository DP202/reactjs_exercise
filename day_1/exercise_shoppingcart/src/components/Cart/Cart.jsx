import React from "react";
import "./cart.css";
const Cart = ({ cart }) => {
  console.log("cart", cart);
  return (
    <div className="product">
      <h1>Giỏ hàng của bạn</h1>
      {Object.keys(cart).length === 0 ? (
        <p>Giỏ hàng rỗng</p>
      ) : (
        <ul className="cart-list">
          {Object.values(cart).map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} sản phẩm
              <button>+</button>
              <button>-</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
