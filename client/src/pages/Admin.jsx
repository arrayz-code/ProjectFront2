import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

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

Modal.setAppElement('#root'); // Necesario para acceder al elemento raíz de la aplicación

const AdminEdit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
  

      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Agregar Producto
      </button>

      <ProductList />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Agregar Producto"
      >
        <ProductForm onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default AdminEdit;