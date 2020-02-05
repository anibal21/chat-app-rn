const io = require("socket.io")();
const messageHandler = require("./handlers/message.handler");

let currentUserId = 2;
const users = {};

io.on("connection", socket => {
  console.log("a user connected!");
  users[socket.id] = currentUserId++;
  socket.on("join", username => {
    userIds[socket.io].username = username;
    messageHandler.handleMessage(socket, users);
  }) 
});

io.listen(3001);