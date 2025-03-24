import React from "react";
import "./productlist.css";

const ProductList = ({ products, addToCart }) => {
  console.log("ADD TO CARD", { addToCart });

  return (
    <div className="product">
      <h1>Danh sách sản phẩm</h1>
      <ul className="product-list">
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name} - {product.price} VNĐ
              <button
                onClick={() => {
                  addToCart(product);
                }}
              >
                Thêm giỏ hàng
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
