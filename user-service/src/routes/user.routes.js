const router = require('express').Router();
const { signup, login } = require('../controllers/userController');

// POST /users/signup
router.post('/signup', signup);

// POST /users/login
router.post('/login', login);

module.exports = router;
