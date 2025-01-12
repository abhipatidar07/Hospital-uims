const express = require('express');
const { signup, login } = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

// Example protected route
router.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: `Welcome, ${req.user.role}` });
});

module.exports = router;
