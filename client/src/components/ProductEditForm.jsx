import React, { useState } from 'react';

const ProductEditForm = ({ product, onUpdate, onCancel }) => {
    const [editedProduct, setEditedProduct] = useState({
        name: product.name,
        category: product.category,
        price: product.price,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({
            ...editedProduct,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({
            ...product,
            name: editedProduct.name,
            category: editedProduct.category,
            price: editedProduct.price
        });
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

                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">Guardar</button>
                    <button type="button" onClick={onCancel} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded">Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default ProductEditForm;