const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../database/models/User");

const secret = process.env.TOKEN_SECRET;

const loginUser = (req, res) => {
  const data = req.auth;
  const token = jwt.sign(data, secret);

  res.json({ token });
};

const registerUser = async (req, res, next) => {
  const { user } = req;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);

  user.password = hashedPassword;

  try {
    await User.create(user);

    res.status(201).json({});
  } catch (error) {
    next(error);
  }
};

module.exports = { loginUser, registerUser };
