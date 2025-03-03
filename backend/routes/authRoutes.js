import express from 'express';
import { register, login, getProfile, updateProfile } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/user', authenticateToken, getProfile);
router.put('/user', authenticateToken, updateProfile);

export default router;
