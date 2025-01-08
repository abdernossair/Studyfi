const router = require('express').Router();
const { createPayment, getPayment } = require('../controllers/paymentController');

// POST /payments
router.post('/', createPayment);

// GET /payments/:id
router.get('/:id', getPayment);

module.exports = router;
