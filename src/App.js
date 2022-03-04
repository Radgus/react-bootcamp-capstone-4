import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Layout from './components/Layout';
import Home from './pages/Home';
import './App.css';

const App = () => (
  <Layout>
    <BrowserRouter>
      <Routes>
        <Route exac path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  </Layout>
)

export default App;
