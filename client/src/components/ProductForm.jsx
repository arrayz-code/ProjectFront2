import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ initialProduct, onClose }) => {
  const [formData, setFormData] = useState({
    name: initialProduct ? initialProduct.name : '',
    category: initialProduct ? initialProduct.category : '',
    price: initialProduct ? initialProduct.price : 0,
    quantity: initialProduct ? initialProduct.quantity : 0,
    imgURL: initialProduct ? initialProduct.imgURL : ''
  });

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setLoading(true);
    const file = e.target.files[0];
    setImageFile(file);
    setFileName(file.name); // Mostrar el nombre del archivo cargado
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('quantity', formData.quantity);
    formDataToSend.append('image', imageFile);

    try {
      if (initialProduct) {
        await axios.put(`http://localhost:4000/api/products/${initialProduct._id}`, formDataToSend);
      } else {
        await axios.post('http://localhost:4000/api/products', formDataToSend);
      }
      onClose();
    } catch (error) {
      console.error('Error al guardar el producto:', error);
    }
  };


  useEffect(() => {
    setFormData({
      name: initialProduct ? initialProduct.name : '',
      category: initialProduct ? initialProduct.category : '',
      price: initialProduct ? initialProduct.price : 0,
      quantity: initialProduct ? initialProduct.quantity : 0,
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
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg" encType="multipart/form-data" >
        <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} className="block w-full rounded-md border-gray-300 mt-2 p-2" /><br />
        <input type="text" name="category" placeholder="Categoría" value={formData.category} onChange={handleChange} className="block w-full rounded-md border-gray-300 mt-2 p-2" /><br />
        <input type="number" name="price" placeholder="Precio" value={formData.price} onChange={handleChange} className="block w-full rounded-md border-gray-300 mt-2 p-2" /><br />
        <input type="number" name="quantity" placeholder="Cantidad" value={formData.quantity} onChange={handleChange} className="block w-full rounded-md border-gray-300 mt-2 p-2" /><br />
        <div className="relative w-full">
          <input type="file" name="image" onChange={handleImageChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
          {loading ? <p className="text-sm text-gray-500">Archivo cargando...</p> : <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">{fileName ? fileName : 'Seleccionar archivo'}</button>}
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-700">Guardar</button>
      </form>
    </div>
  );
};

export default ProductForm;
