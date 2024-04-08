import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Component from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Promotions from './pages/Promotions';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

import Comprar from './pages/Comprar';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import Admin from "./pages/Admin";
import WComponent  from "./components/WButton"

const App = () => {
  return (
    <AuthProvider>
      <Router>
     
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<ProtectedRoute/>}>
            <Route path="/products" element={<Products />} />
            <Route path="/promotions" element={<Promotions />} />

            <Route path="/comprar" element={<Comprar/>} />
            <Route path="/admin" element={<Admin />} />
            

            </Route>

          </Routes>
          <WComponent/>
     
      
      </Router>

      <Component/>
  
    </AuthProvider>
    
  );
};

export default App;




