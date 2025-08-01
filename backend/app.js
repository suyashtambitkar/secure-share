const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const PORT = 5000;
const {Server} =require('socket.io');

const server = http.createServer(app);

app.use(express.json())
app.use(cors());

// Create a new Socket.IO server
const io = new Server(server,{
    cors:{
        origin:'*',
        methods:['Get','Post']
    }
})

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
