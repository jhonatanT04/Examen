const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server running on ws://localhost:8080');

server.on('connection', ws => {
  ws.send('Conexión establecida');

  setInterval(() => {
    ws.send(`Mensaje en tiempo real: ${new Date().toLocaleTimeString()}`);
  }, 5000);
});
