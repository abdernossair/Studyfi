const { Server } = require('socket.io');

let io;

function setupWebSocket(server) {
  io = new Server(server, {
    cors: {
      origin: '*',
    }
  });

  io.on('connection', (socket) => {
    console.log('Nouveau client connecté :', socket.id);

    socket.on('joinRoom', (roomId) => {
      socket.join(roomId);
      console.log(`Socket ${socket.id} a rejoint la room ${roomId}`);
    });

    socket.on('chatMessage', (data) => {
      // data = { roomId, message }
      io.to(data.roomId).emit('chatMessage', {
        message: data.message,
        sender: socket.id
      });
    });

    socket.on('disconnect', () => {
      console.log('Client déconnecté :', socket.id);
    });
  });
}

module.exports = { setupWebSocket };
