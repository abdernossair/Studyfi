const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Récupération du token dans les en-têtes
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Accès non autorisé' });
  }
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET || 'secret_key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token invalide' });
    }
    // on stocke les infos dans req.user
    req.user = decoded; 
    next();
  });
};
