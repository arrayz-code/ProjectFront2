import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="">

<div className="flex bg-white" style={{ height: '450px' }}>
  <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
    <div>
      <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Shop<span className="text-indigo-600">Tecnology</span></h2>
      <p className="mt-2 text-sm text-gray-500 md:text-base">Explora nuestra selección de dispositivos de última generación para potenciar tu creatividad y productividad</p>
      <div className="flex justify-center lg:justify-start mt-6">
        <a className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="/register">¡Registrate Ya!</a>
      </div>
    </div>
  </div>
  <div className="hidden lg:block lg:w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}>
  <div className="h-full">
    <img 
      src="https://blog.es.playstation.com/tachyon/sites/14/2023/07/24bbaed190443ef0d278f3d5a0fe44af2279cd7b.png" 
      alt="Background" 
      className="h-full w-full object-cover"
    />
    <div className="h-full bg-black opacity-25"></div>
  </div>
</div>

</div>





      {/* Agregar las marcas como logos */}
      <div className='px-4 mb-10 mt-4'>
        <ProductList fromHome={true} />
        <div className="flex justify-center mt-10">
          {isAuthenticated ? (
            <Link to="/products" className="text-black font-bold text-xl no-underline hover:text-gray-600">Ver más productos</Link>
          ) : (
            <Link to="/login" className="text-black font-bold text-xl no-underline hover:text-gray-600">Iniciar sesión para ver más</Link>
          )}


        </div>

      </div>
      <div className="text-center">
        <img src="./src/assets/im1.jpg" alt="Large Image" className="mx-auto mb-4 w-screen" />
        <h2 className="text-4xl font-bold mb-6">Explora nuestra colección de productos</h2>
      </div>

      <div className="flex justify-center items-center">
        <img src="./src/assets/marca1.jpg" alt="Marca 1" className="h-16 mx-4" />
        <img src="./src/assets/marca2.jpg" alt="Marca 2" className="h-16 mx-4" />
        <img src="./src/assets/marca3.jpg" alt="Marca 3" className="h-16 mx-4" />
        <img src="./src/assets/marca4.jpg" alt="Marca 4" className="h-16 mx-4" />
        <img src="./src/assets/marca5.jpg" alt="Marca 4" className="h-16 mx-4" />
        {/* Agrega más imágenes según sea necesario */}
      </div>



      <div className="flex justify-center items-center mt-10">
        <iframe
          title="YouTube Video"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/Btf4mN37OsU?autoplay=1&mute=1&controls=0&loop=1&playlist=Btf4mN37OsU"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Home;
