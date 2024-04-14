import Product from "../models/Product.js";

export const createInitialProducts = async () => {
  try {
    // Verificar si ya existen productos en la base de datos antes de crear los nuevos
    const existingProducts = await Product.find();
    if (existingProducts.length === 0) {
      // Lista de productos con el nombre de la imagen en el servidor
      const products = [
        {
          name: "Laptop Lenovo ThinkPad X1 Carbon",
          category: "Computadoras portátiles",
          price: 1499.99,
          imgURL: "laptop.png", // Nombre de la imagen en el servidor
          quantity: 10 // Agrega la cantidad disponible
        },
        {
          name: "Smartphone Samsung Galaxy S21 Ultra",
          category: "Teléfonos inteligentes",
          price: 1199.99,
          imgURL: "phone.jpg", // Nombre de la imagen en el servidor
          quantity: 20 // Agrega la cantidad disponible
        }
      ];

      // Guardar los productos en la base de datos
      const createdProducts = await Product.create(products);

      console.log('Productos creados:', createdProducts);
    } else {
      console.log('Ya existen productos en la base de datos. No se crearon productos nuevos.');
    }
  } catch (error) {
    console.error('Error al crear productos:', error);
  }
};
