import React, { useState } from 'react';

const ProductEditForm = ({ product, onUpdate, onCancel }) => {
    const [editedProduct, setEditedProduct] = useState({
        name: product.name,
        category: product.category,
        price: product.price,
        quantity: product.quantity, // Agregar el campo de cantidad
        image: null // Estado para almacenar la imagen seleccionada
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({
            ...editedProduct,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setEditedProduct({
            ...editedProduct,
            image: file // Almacenar la imagen seleccionada en el estado
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', editedProduct.name);
        formData.append('category', editedProduct.category);
        formData.append('price', editedProduct.price);
        formData.append('quantity', editedProduct.quantity); // Agregar la cantidad al formulario
        if (editedProduct.image) {
            formData.append('image', editedProduct.image); // Agregar la imagen al formulario si se seleccionó una nueva
        }
        onUpdate(product._id, formData);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">Editar Producto</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="block mb-2">Nombre:</label>
                <input type="text" id="name" name="name" value={editedProduct.name} onChange={handleChange} className="w-full p-2 mb-2 border" required />

                <label htmlFor="category" className="block mb-2">Categoría:</label>
                <input type="text" id="category" name="category" value={editedProduct.category} onChange={handleChange} className="w-full p-2 mb-2 border" required />

                <label htmlFor="price" className="block mb-2">Precio:</label>
                <input type="number" id="price" name="price" value={editedProduct.price} onChange={handleChange} className="w-full p-2 mb-2 border" required />

                <label htmlFor="quantity" className="block mb-2">Cantidad:</label>
                <input type="number" id="quantity" name="quantity" value={editedProduct.quantity} onChange={handleChange} className="w-full p-2 mb-2 border" required />

                <label htmlFor="image" className="block mb-2">Imagen:</label>
                <input type="file" id="image" name="image" onChange={handleImageChange} className="w-full p-2 mb-2 border" />

                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">Guardar</button>
                    <button type="button" onClick={onCancel} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded">Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default ProductEditForm;
