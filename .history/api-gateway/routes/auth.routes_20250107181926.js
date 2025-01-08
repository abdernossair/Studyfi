const router = require('express').Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');

// Signup - on redirige vers user-service
router.post('/signup', async (req, res) => {
  try {
    const response = await axios.post(
      'http://user-service:3001/users/signup',
      req.body
    );
    return res.json(response.data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Login - on vérifie le user-service, puis on renvoie un JWT
router.post('/login', async (req, res) => {
  try {
    const response = await axios.post(
      'http://user-service:3001/users/login',
      req.body
    );
    const userData = response.data;
    // Crée un token JWT
    const token = jwt.sign(
      { userId: userData._id, role: userData.role },
      process.env.JWT_SECRET || 'secret_key',
      { expiresIn: '1d' }
    );
    return res.json({ token });
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
});

module.exports = router;
