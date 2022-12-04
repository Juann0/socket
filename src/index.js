const express = require('express');
const socket = require('socket.io');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '127.0.0.1';
const server = app.listen(PORT, HOST);

app.use(express.static('public'));
console.log('Server corriendo')
const io = socket(server)

var count = 0;

io.on('', (socket) => {
    console.log("Nueva conexion -> " + socket.id);

    socket.on('counter', () => {
        count++;
        socket.broadcast.emit('counter', count);
    });
});
