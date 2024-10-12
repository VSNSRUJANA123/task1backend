const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  const { name, handle } = req.body;
  const images = req.files.map((file) => file.path);

  const newUser = new User({ name, handle, images });
  await newUser.save();
  res.status(201).json(newUser);
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
