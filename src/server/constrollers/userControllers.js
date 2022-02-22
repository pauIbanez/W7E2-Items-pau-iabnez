const jwt = require("jsonwebtoken");

const secret = process.env.TOKEN_SECRET;

const loginUser = (req, res, next) => {
  const data = req.auth;
  const token = jwt.sign(data, secret);

  res.json({ token });
};

const registerUser = (req, res, next) => {};

module.exports = { loginUser, registerUser };
