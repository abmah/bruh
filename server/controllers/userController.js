const mongoose = require("mongoose");
const User = mongoose.model("User");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  // for validation
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // *********************************//

  if (!emailRegex.test(email)) throw "email is not valid";
  if (password.length < 6) throw "password should be atleast 6 characters long";

  const userExists = await User.findOne({
    email,
  });

  if (userExists) throw "user with this email already exists";

  const user = new User({
    name,
    email,
    password: sha256(password + process.env.SALT),
  });

  await user.save();

  res.json({
    message: `user ${name} created successfully`,
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password: sha256(password + process.env.SALT),
  });
  if (!user) throw "email and password do not match";
  const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  res.json({
    message: "login successful",
    token,
  });
};
