import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search';
import ShoppingCart from './pages/Shopping';
import ProductContext from './state/productContext';
import Checkout from './pages/Checkout';
import './App.css';


const App = () => {
  const [productsInCart, setProductsInCart] = useState([]);
  
  return (
    <ProductContext.Provider 
      value={{ productsInCart, setProductsInCart }}
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
            <Route exac path='/checkout' element={<Checkout/>} />
          </Routes>
      </Layout>
    </BrowserRouter>
    </ProductContext.Provider>
  )
}

export default App;
