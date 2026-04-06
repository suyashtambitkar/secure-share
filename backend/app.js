const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
require('dotenv').config();
const { Server } = require('socket.io');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

app.use(express.json())
app.use(cors());

// Create a new Socket.IO server
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// Socket io logic
io.on("connection", (socket) => {

    // join room  point
    socket.on("join_room", (roomId) => {
        socket.join(roomId);
    });

    // Receiver file point
    socket.on("send_file", ({ roomId, fileName, fileData }) => {
        socket.to(roomId).emit("receive_file",{fileName,fileData});
    });

})

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
