// // routes/productRoutes.js
// import express from 'express';
// import { createProduct, getAllProducts, getProductById } from '../controllers/productController.js';

// const router = express.Router();

// router.post('/', createProduct);        // Add product
// router.get('/', getAllProducts);        // Get all products
// router.get('/:id', getProductById);     // Get single product

// export default router;



// routes/productRoutes.js
import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById
} from '../controllers/productController.js';

const router = express.Router();

// POST /api/products/ → Create a new product
router.post('/', createProduct);

// GET /api/products/ → Get all products
router.get('/', getAllProducts);

// GET /api/products/:id → Get a product by ID
router.get('/:id', getProductById);

export default router;
