import express from 'express';

import brandController from '../controllers/brands.controller.js';

const router = express.Router();

router.post('/save-brand', brandController.saveBrand);
router.get('/get-brands', brandController.getBrands);
router.get('/get-brand/:id', brandController.getBrand);
router.put('/edit-brand/:id', brandController.updateBrand);
router.delete('/delete-brand/:id', brandController.deleteBrand);

export default router;