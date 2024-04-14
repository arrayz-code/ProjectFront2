import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    maxWidth: '500px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  },
};

const Products = () => {
  const { userRole } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productsUpdated, setProductsUpdated] = useState(false); // Estado para rastrear actualizaciones

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/products');
        const products = response.data;
        const uniqueCategories = [...new Set(products.map(product => product.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    fetchProducts();
  }, [productsUpdated]); // Hacer referencia a productsUpdated en la dependencia para que se vuelva a cargar cuando cambie

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleProductChange = () => {
    setProductsUpdated(prevState => !prevState); // Invertir el estado para forzar una actualización
  };

  return (
    <div className="mx-auto px-4 bg-gray-100 mt-4">
      {userRole === 'admin' && (
        <div className="flex justify-center">
          <button onClick={openModal} className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mt-4 mb-4">
            Agregar Producto
          </button>
        </div>
      )}

<div className="bg-gray-100 flex justify-center items-center mb-4 mt-0">
  <div className="w-1/3 mr-4"> {/* Aquí ajusta el ancho del campo de búsqueda */}
    <input 
      type="text" 
      placeholder="Buscar productos..." 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
      className="w-full p-2 border rounded" 
    />
  </div>
  <div>
    <select 
      value={selectedCategory} 
      onChange={(e) => setSelectedCategory(e.target.value)} 
      className="p-2 border rounded"
    >
      <option value="">Todas las categorías</option>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  </div>
</div>


      <ProductList 
        searchTerm={searchTerm} 
        selectedCategory={selectedCategory} 
        onProductChange={handleProductChange} // Asegúrate de pasar la función de cambio de producto
      />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Agregar Producto"
      >
        <ProductForm 
          onClose={() => {
            closeModal();
            handleProductChange(); // Llama a la función de cambio de producto cuando se cierra el modal
          }}
        />
      </Modal>
    </div>
  );
};

export default Products;
