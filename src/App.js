import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Layout>
        <Routes>
          <Route exac path='/' element={<Home/>} />
          <Route exac path='/productList' element={<ProductList/>} />
        </Routes>
    </Layout>
  </BrowserRouter>
)

export default App;
