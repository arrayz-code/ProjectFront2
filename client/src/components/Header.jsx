import { useState } from 'react';
import { useAuth } from "../context/AuthContext"
import { Link } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img className="h-10" src="data:image/jpeg;base64,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" alt="Hotel Logo" />
            <a href="/" className="ml-2 text-lg font-bold text-gray-800">ShopTecnology</a>
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
              {isAuthenticated ? (
                <>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/services">Servicios</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/precios">Precios</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/reservas">Reservar</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/promotions">Promociones</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/contact">Contactanos</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/blog">Blog</a></li>
                  <li><button onClick={logout} className="text-white hover:text-black font-medium bg-indigo-500 px-4 py-1 rounded-md">Logout</button></li>
                  {isAuthenticated && (
                    <li> <Link to="/admin" className="text-gray-600 hover:text-gray-800 font-medium">
                    <button className="bg-indigo-500 text-white rounded-full px-2.5 py-1">A</button>
                  </Link></li>
                  
                  )}
                   
                </>
              ) :
                (<>
                  <li><a className="text-white hover:text-black font-medium bg-indigo-500 px-4 py-1  rounded-md" href="/register">Sign Up</a></li>
                  <li><a className="text-white hover:text-black font-medium  bg-indigo-500 px-4 py-1 rounded-md" href="/login">Login</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/services">Servicios</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/contact">Contactanos</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/blog">Blog</a></li>
                </>)}
            </ul>
          </nav>
          <button className="md:hidden" onClick={handleToggleMenu}>
            <svg className="h-6 w-6 fill-current text-gray-600 hover:text-gray-800" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
