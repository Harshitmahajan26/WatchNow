// backend/routes/newCollectionRoutes.js
import express from 'express';
import { fetchNewCollections } from '../controllers/newCollectionController.js';

const router = express.Router();

router.get('/', fetchNewCollections);

export default router;
