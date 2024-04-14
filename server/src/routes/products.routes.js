import { Router } from "express";
import {
  getProducts,
  createProduct,
  updateProductById,
  deleteProductById,
  getProductById,
} from "../controllers/products.controller.js";
import upload from "../multerconfig.js";

const router = Router();

router.get("/", getProducts);

router.get("/:productId", getProductById);

// Utiliza upload.single('image') en la ruta de creación de productos
router.post('/',createProduct, upload.single('image'));

router.put("/:productId", updateProductById);

router.delete("/:productId", deleteProductById);

export default router;
