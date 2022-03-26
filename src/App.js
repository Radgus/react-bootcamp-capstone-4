import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Layout>
        <Routes>
          <Route exac path='/' element={<Home/>} />
          <Route exac path='/home' element={<Home/>} />
          <Route exac path='/products' element={<ProductList/>} />
          <Route exac path='/product/:productId' element={<ProductDetail/>} />
        </Routes>
    </Layout>
  </BrowserRouter>
)

export default App;
