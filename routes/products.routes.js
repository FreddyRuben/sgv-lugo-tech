import express from 'express';

import productsController from '../controllers/products.controller.js';

const router = express.Router();

router.post('/save-product', productsController.saveProduct);

export default router;