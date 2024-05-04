import React, { useContext } from "react";
import productContext from "../context/productContext";

function ProductList() {
  const { products, addProduct } = useContext(productContext);
  console.log("products", products);
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.title}</li>
        ))}
      </ul>
      <button onClick={() => addProduct({ title: "New Product" })}>
        Add Product
      </button>
    </div>
  );
}

export default ProductList;
