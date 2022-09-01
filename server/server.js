require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection ERROR: " + err.message);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!");
});

//Bring in the models
require("./models/User");
require("./models/Chatroom");
require("./models/Message");

const app = require("./app");

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log("Server listening on port 8000");
});
const io = require("socket.io")(server, {
  allowEIO3: true,
  cors: {
    origin: true,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const jwt = require("jwt-then");

const Message = mongoose.model("Message");
const User = mongoose.model("User");

io.use(async (socket, next) => {
  try {
    const token = socket.handshake.query.token;
    const payload = await jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = payload.id;
    next();
  } catch (err) {
    console.log(err);
  }
});

io.on("connection", (socket) => {
  console.log("Connected: " + socket.userId);

  socket.on("disconnect", () => {
    console.log("Disconnected: " + socket.userId);
  });

  socket.on("joinRoom", ({ chatroomId }) => {
    socket.join(chatroomId);
    console.log(`user ${socket.userId} has joined room ${chatroomId}`);
  });
  socket.on("leaveRoom", ({ chatroomId }) => {
    socket.leave(chatroomId);
    console.log(`user ${socket.userId} has left ${chatroomId}`);
  });

  socket.on("chatroomMessage", async ({ chatroomId, message }) => {
    if (message.trim().length > 0) {
      const user = await User.findOne({ _id: socket.userId });
      console.log(
        `user data is :  ${message} written by ${user.name} and the chatroom is ${chatroomId}`
      );
      const newMessage = new Message({
        chatroom: chatroomId,
        user: socket.userId,
        message,
      });
      io.to(chatroomId).emit("newMessage", {
        message,
        name: user.name,
        userId: socket.userId,
      });
      await newMessage.save();
    }
  });
});
// there is a problem with the above code that is causing some messages to have the same user id even though they are from different users.
