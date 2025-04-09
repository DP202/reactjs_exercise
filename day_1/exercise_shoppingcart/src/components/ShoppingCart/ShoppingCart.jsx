import React, { useState } from "react";
import ProductList from "../ProductList/ProductList";
import Cart from "../Cart/Cart";

const data = [
  {
    id: 1,
    name: "Iphone 15 Pro Max",
    price: 28900000,
  },
  {
    id: 2,
    name: "Iphone 16 Pro Max",
    price: 30000000,
  },
  {
    id: 3,
    name: " MacBook Air M2",
    price: 22990000,
  },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: {
        ...product, // giữ lại thông tin
        quantity: prevCart[product.id] ? prevCart[product.id].quantity + 1 : 1,
      },
    }));
  };

  const addQuantity = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: {
        ...prevCart[productId],
        quantity: prevCart[productId] ? prevCart[productId].quantity + 1 : 1,
      },
    }));
  };

  const minusQuantity = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: {
        ...prevCart[productId],
        quantity:
          prevCart[productId] <= 0 ? (
            <p>Sản phẩm trống</p>
          ) : (
            prevCart[productId].quantity - 1
          ),
      },
    }));
  };

  return (
    <div>
      <ProductList products={data} addToCart={addToCart} />
      <Cart
        cart={cart}
        addQuantity={addQuantity}
        minusQuantity={minusQuantity}
      />
    </div>
  );
};

export default ShoppingCart;
