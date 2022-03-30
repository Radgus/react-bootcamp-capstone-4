import React from 'react';


const ProductContext = React.createContext({
  products: [],
  addProduct: () => {},
  deleteProduct:() => {},
});

export default ProductContext;
