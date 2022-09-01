const mongoose = require("mongoose");
const Chatroom = mongoose.model("Chatroom");
const Message = mongoose.model("Message");
const User = mongoose.model("User");
exports.createChatroom = async (req, res) => {
  const { name } = req.body;

  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(name)) throw "Chatroom name can contain only alphabets.";

  const chatroomExists = await Chatroom.findOne({ name });

  if (chatroomExists) throw "Chatroom with that name already exists!";

  const chatroom = new Chatroom({
    name,
  });

  await chatroom.save();

  res.json({
    message: "Chatroom created!",
  });
};

exports.getAllChatrooms = async (req, res) => {
  const chatrooms = await Chatroom.find({});

  res.json(chatrooms);
};

exports.getAllMessages = async (req, res) => {
  const messages = await Message.find({});
  const users = await User.find({});

  const messagesWithUserNames = messages.map((message) => {
    const user = users.find(
      (user) => user._id.toString() === message.user.toString()
    );

    return {
      ...message._doc,
      username: user.name,
    };
  });

  res.json(messagesWithUserNames);
};
