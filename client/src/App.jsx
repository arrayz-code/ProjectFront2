import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Component from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Promotions from './pages/Promotions';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Precios from './pages/Precios'
import Comprar from './pages/Comprar';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import Admin from "./pages/Admin";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<ProtectedRoute/>}>
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/precios" element={<Precios />} />
            <Route path="/comprar" element={<Comprar/>} />
            <Route path="/admin" element={<Admin />} />
            

            </Route>

          </Routes>
        
        </div>
      </Router>
      <Component/>
    </AuthProvider>
    
  );
};

export default App;




