import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from "../context/AuthContext";
import ProductForm from './ProductForm';

const ProductList = ({ searchTerm, selectedCategory, fromHome }) => {
    const [products, setProducts] = useState([]);
    const [editProductId, setEditProductId] = useState(null);
    const { userRole } = useAuth(); 
    const [buyProductId, setBuyProductId] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [units, setUnits] = useState(1);
    const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail'));
    const [productsUpdated, setProductsUpdated] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products: ', error);
            }
        };

        fetchProducts();
    }, [productsUpdated]);

    const handleDelete = async (productId) => {
        try {
            await axios.delete(`http://localhost:4000/api/products/${productId}`);
            setProducts(products.filter(product => product._id !== productId));
            setProductsUpdated(true); // Forzar actualización después de eliminar
        } catch (error) {
            console.error('Error deleting product: ', error);
        }
    };

    const handleEdit = (productId) => {
        setEditProductId(productId);
    };

    const handleFormClose = () => {
        setEditProductId(null);
    };

    const handleBuy = (productId) => {
        setBuyProductId(productId);
    };

    const handleConfirmBuy = () => {
        const productToBuy = products.find(product => product._id === buyProductId);
    
        const compra = {
            productName: productToBuy.name,
            productImage: productToBuy.imgURL,
            paymentMethod: paymentMethod,
            units: units,
            userEmail: userEmail 
        };

        axios.post('http://localhost:4000/enviar-correo', compra)
            .then(response => {
                console.log('Correo electrónico enviado correctamente');
            })
            .catch(error => {
                console.error('Error al enviar el correo electrónico:', error);
            });
    
        setBuyProductId(null);
        setPaymentMethod('');
        setUnits(1);
    };

    const filteredProducts = products.filter(product => {
        if (selectedCategory && product.category !== selectedCategory) {
            return false;
        }
        const term = searchTerm ? searchTerm.toUpperCase() : '';
        return product.name.toUpperCase().includes(term);
    });

    const displayedProducts = fromHome ? products.slice(0, 3) : filteredProducts;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {displayedProducts.map(product => (
              <div key={product._id} className="bg-white shadow-md rounded-lg p-4 border border-black">
                    <img src={product.imgURL} alt={product.name} className="w-full h-auto max-h-40 object-contain mb-4" />
                    <p><strong>Nombre:</strong> {product.name}</p>
                    <p><strong>Categoría:</strong> {product.category}</p>
                    <p><strong>Precio:</strong> ${product.price}</p>
                    {userRole === 'admin' && (
                        <div>
                            <button onClick={() => handleDelete(product._id)} className="bg-black hover:bg-gray-400 text-white font-bold py-1 px-2 rounded mt-2">
                                Eliminar
                            </button>
                            <button onClick={() => handleEdit(product._id)} className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded ml-2 mt-2">
                                Editar
                            </button>
                        </div>
                    )}
                    {!fromHome && userRole !== 'admin' && (
                        <div>
                            <button onClick={() => handleBuy(product._id)} className="bg-black hover:bg-gray-200 text-white font-bold py-1 px-2 rounded mt-2">
                                Comprar
                            </button>
                            {buyProductId === product._id && (
                                <div className="mt-2">
                                    <label htmlFor="paymentMethod">Método de pago:</label>
                                    <select id="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="block w-full border-gray-300 mt-1 p-2">
                                        <option value="">Selecciona un método de pago</option>
                                        <option value="credit_card">Tarjeta de crédito</option>
                                        <option value="paypal">PayPal</option>
                                    </select>
                                    <label htmlFor="units">Unidades:</label>
                                    <input type="number" id="units" value={units} onChange={(e) => setUnits(e.target.value)} className="block w-full border-gray-300 mt-1 p-2" />
                                    <button onClick={handleConfirmBuy} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-2">
                                        Confirmar Compra
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
            {editProductId && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <ProductForm initialProduct={products.find(product => product._id === editProductId)} onClose={handleFormClose} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
