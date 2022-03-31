import React from 'react';


const ProductContext = React.createContext({
  products: [],
  setProduct: () => {},
});

export default ProductContext;
