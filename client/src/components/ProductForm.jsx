import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ initialProduct, onClose }) => {
  const [formData, setFormData] = useState({
    name: initialProduct ? initialProduct.name : '',
    category: initialProduct ? initialProduct.category : '',
    price: initialProduct ? initialProduct.price : 0,
    imgURL: initialProduct ? initialProduct.imgURL : ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (initialProduct) {
        // Editar el producto si ya existe
        await axios.put(`http://localhost:4000/api/products/${initialProduct._id}`, formData);
      } else {
        // Crear un nuevo producto si no existe
        await axios.post('http://localhost:4000/api/products', formData);
      }
      onClose(); // Cerrar la ventana modal al guardar
    } catch (error) {
      console.error('Error al guardar el producto:', error);
    }
  };

  useEffect(() => {
    setFormData({
      name: initialProduct ? initialProduct.name : '',
      category: initialProduct ? initialProduct.category : '',
      price: initialProduct ? initialProduct.price : 0,
      imgURL: initialProduct ? initialProduct.imgURL : ''
    });
  }, [initialProduct]);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Editar Producto</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} className="block w-full rounded-md border-gray-300 mt-2 p-2" /><br />
        <input type="text" name="category" placeholder="Categoría" value={formData.category} onChange={handleChange} className="block w-full rounded-md border-gray-300 mt-2 p-2" /><br />
        <input type="number" name="price" placeholder="Precio" value={formData.price} onChange={handleChange} className="block w-full rounded-md border-gray-300 mt-2 p-2" /><br />
        <input type="text" name="imgURL" placeholder="URL de la imagen" value={formData.imgURL} onChange={handleChange} className="block w-full rounded-md border-gray-300 mt-2 p-2" /><br />
        <button type="submit" className="mt-4 bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-700">Guardar</button>
      </form>
    </div>
  );
};

export default ProductForm;
