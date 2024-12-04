const express = require('express');
const router = express.Router();
const cors = require('cors');
const { registerUser, loginUser, verifyUser, authenticateToken, logoutUser } = require('../controllers/authController');

// middleware

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/auth/user/', authenticateToken, verifyUser);
router.post('/auth/logout', logoutUser);

module.exports = router;