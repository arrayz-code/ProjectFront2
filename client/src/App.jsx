import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Component from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';

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
            
            

            </Route>

          </Routes>
          <WComponent/>
     
      
      </Router>

      <Component/>
  
    </AuthProvider>
    
  );
};

export default App;




