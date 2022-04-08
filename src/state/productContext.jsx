import React from 'react';


const ProductContext = React.createContext({
  productsInCart: [],
  setProductsInCart: () => {},
});

export default ProductContext;
