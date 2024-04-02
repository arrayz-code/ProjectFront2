import React from 'react';
import ProductList from '../components/ProductList';
import ReactPlayer from 'react-player';

const Home = () => {
  return (
    <div className="">
      <div className="text-center">
        {/* Agregar la imagen grande con un h2 */}
        <img src="./src/assets/im1.jpg" alt="Large Image" className="mx-auto mb-4 w-screen" />
        <h2 className="text-4xl font-bold mb-6">Explora nuestra colección de productos</h2>
      </div>
      {/* Agregar las marcas como logos */}
      <div className='px-4 mb-10'>
        <ProductList />
      </div>
      <div className="flex justify-center items- ">
        <img src="./src/assets/marca1.jpg" alt="Marca 1" className="h-16 mx-4" />
        <img src="./src/assets/marca2.jpg" alt="Marca 2" className="h-16 mx-4" />
        <img src="./src/assets/marca3.jpg" alt="Marca 3" className="h-16 mx-4" />
        <img src="./src/assets/marca4.jpg" alt="Marca 4" className="h-16 mx-4" />
        <img src="./src/assets/marca5.jpg" alt="Marca 4" className="h-16 mx-4" />
        {/* Agrega más imágenes según sea necesario */}
      </div>
      {/* Agregar el video */}
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
