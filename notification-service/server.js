require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const { setupWebSocket } = require('./src/socket');

const app = express();
app.use(cors());

// Création du serveur HTTP
const server = http.createServer(app);

// Configuration WebSocket
setupWebSocket(server);

// Endpoint de test
app.get('/', (req, res) => {
  res.send('Notification Service is running...');
});

const PORT = process.env.PORT || 3004;
server.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});
