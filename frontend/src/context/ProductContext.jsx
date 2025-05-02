import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartsList, setCartsList] = useState([]);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, cartsList, setCartsList }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
