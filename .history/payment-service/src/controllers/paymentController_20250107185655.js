const Payment = require('../models/Payment');

exports.createPayment = async (req, res) => {
  try {
    const newPayment = await Payment.create(req.body);
    res.status(201).json(newPayment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPayment = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ error: 'Paiement non trouvé' });
    }
    res.status(200).json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
