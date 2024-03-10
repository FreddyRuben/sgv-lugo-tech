import express from 'express';

import brandController from '../controllers/brands.controller.js';

const router = express.Router();

router.get('/save-brand', brandController.saveBrand);

export default router;