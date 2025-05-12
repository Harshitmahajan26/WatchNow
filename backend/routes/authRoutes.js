// import express from 'express';
// import { register, login, getProfile, updateProfile } from '../controllers/authController.js';
// import { authenticateToken } from '../middleware/authMiddleware.js';

// const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);
// router.get('/user', authenticateToken, getProfile);
// router.put('/user', authenticateToken, updateProfile);

// export default router;
// backend/routes/authRoutes.js



// import express from 'express';
// import { registerUser } from '../controllers/authController.js';

// const router = express.Router();

// router.post('/register', registerUser);

// export default router;

// backend/routes/authRoutes.js


import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
