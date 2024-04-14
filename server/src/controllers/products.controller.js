import Product from "../models/Product.js";
import fs from 'fs';

export const createProduct = async (req, res) => {
  try {
    // Extraer los datos del producto del cuerpo de la solicitud
    const { name, category, price, quantity } = req.body;

    // Verificar si se cargó una imagen
    const imgURL = req.file ? req.file.filename : '';

    // Crear un nuevo producto con los datos proporcionados
    const newProduct = new Product();
    newProduct.name = name;
    newProduct.category = category;
    newProduct.price = price;
    newProduct.quantity = quantity; // Agregar la cantidad al nuevo producto
    newProduct.imgURL = imgURL; // Asignar el valor de req.file.path a imgURL

    // Guardar el producto en la base de datos
    const productSaved = await newProduct.save();

    // Retornar el producto creado como respuesta
    return res.status(201).json(productSaved);
  } catch (error) {
    console.error('Error al guardar el producto:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};


export const getProductById = async (req, res) => {
  const { productId } = req.params;

  const product = await Product.findById(productId);
  res.status(200).json(product);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();
  return res.json(products);
};

export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
  const { productId } = req.params;

  try {
    // Busca el producto en la base de datos
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    // Elimina el archivo de imagen asociado al producto
    const imagePath = `./src/uploads/${product.imgURL}`;
    fs.unlinkSync(imagePath);

    // Elimina el producto de la base de datos
    await Product.findByIdAndDelete(productId);

    return res.status(204).json(); // No Content
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};