import { useState } from 'react';
import { useAuth } from "../context/AuthContext";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, userRole, logout } = useAuth(); // Obtiene la información de autenticación del contexto
  const isAdmin = userRole === 'admin';

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img className="h-10" src="./src/assets/icon.png" alt="Hotel Logo" />
            <a href="/" className="ml-2 text-lg font-bold text-gray-800">ShopTecnology</a>
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
              {isAuthenticated ? (
                <>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/services">Productos</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/precios"></a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/reservas"></a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/promotions">Promociones</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/blog"></a></li>
                  <li><button onClick={logout} className="text-white hover:text-black font-medium bg-indigo-500 px-4 py-1 rounded-md">Logout</button></li>
                  {isAdmin && (
                    <li> 
                      <Link to="/admin" className="text-gray-600 hover:text-gray-800 font-medium">
                        <button className="bg-indigo-500 text-white rounded-full px-2.5 py-1">Admin</button>
                      </Link>
                    </li>
                  )}
                </>
              ) : (
                <>
                  <li><a className="text-white hover:text-black font-medium bg-indigo-500 px-4 py-1 rounded-md" href="/register">Sign Up</a></li>
                  <li><a className="text-white hover:text-black font-medium bg-indigo-500 px-4 py-1 rounded-md" href="/login">Login</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/services"></a></li>
                  <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/blog">Blog</a></li>
                </>
              )}
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