import express from 'express';

import productsController from '../controllers/products.controller.js';

const router = express.Router();

router.get('/products', productsController.getProducts);

export default router;