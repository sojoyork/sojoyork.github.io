const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, '../public')));

// Serve separate pages
app.get('/posts', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/posts.html'));
});

app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/chat.html'));
});

// Handle posts
let posts = [];
app.use(express.json());
app.post('/new-post', (req, res) => {
  const post = req.body.post;
  if (post) {
    posts.push(post);
    res.status(200).json({ message: "Post added successfully!" });
  } else {
    res.status(400).json({ message: "Post cannot be empty" });
  }
});

app.get('/posts-data', (req, res) => {
  res.json(posts);
});

// Handle chat
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

let posts = [];
let chatMessages = []; // Store chat messages

app.use(express.json());

// Handle posts
app.post('/new-post', (req, res) => {
  const post = req.body.post;
  if (post) {
    posts.push(post);
    res.status(200).json({ message: "Post added successfully!" });
  } else {
    res.status(400).json({ message: "Post cannot be empty" });
  }
});

app.get('/posts-data', (req, res) => {
  res.json(posts);
});

// Handle chat messages
io.on('connection', (socket) => {
  console.log('A user connected');

  // Send all previous chat messages to the new user
  socket.emit('previous messages', chatMessages);

  socket.on('chat message', (msg) => {
    chatMessages.push(msg); // Save message to array
    io.emit('chat message', msg);
  });
});

// Provide chat messages when requested
app.get('/chat-messages', (req, res) => {
  res.json(chatMessages);
});
