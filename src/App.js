import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search';
import ShoppingCart from './pages/Shopping';
import ProductContext from './state/productContext';

import './App.css';

const fakeObject = {
    amount: 2,
    product: {
    id: "YZWTvxIAACkAujoz",
    data: {
      name: "Bathrobe Disney Mickey Mouse",
    },
  },
}

const App = () => {
  const [products, setProduct] = useState([fakeObject]);
  
  return (
    <ProductContext.Provider 
      value={{ products, setProduct }}
    >
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route exac path='/' element={<Home/>} />
            <Route exac path='/home' element={<Home/>} />
            <Route exac path='/products' element={<ProductList/>} />
            <Route exac path='/product/:productId' element={<ProductDetail/>} />
            <Route exac path='/search' element={<Search/>} />
            <Route exac path='/cart' element={<ShoppingCart/>} />
          </Routes>
      </Layout>
    </BrowserRouter>
    </ProductContext.Provider>
  )
}

export default App;
