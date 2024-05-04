import { createContext, useEffect, useState } from "react";

const productContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  //api call

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProducts = (product) => {
    setProducts([...products, product]);
  };
  return (
    <productContext.Provider value={{ addProducts, products }}>
      {children}
    </productContext.Provider>
  );
};

export default productContext;
