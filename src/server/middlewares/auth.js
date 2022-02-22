const bcrypt = require("bcrypt");
const User = require("../../database/models/User");

const checkCredentials = async (req, res, next) => {
  const authData = req.headers.authorization.split(" ");

  if (!authData[0] || authData[0] !== "Basic") {
    const error = new Error("Credentials not provided");
    error.code = 401;
    next(error);
    return;
  }

  const userData = Buffer.from(authData[1], "base64")
    .toString("ascii")
    .split(":");

  const user = {
    username: userData[0],
    password: userData[1],
  };
  try {
    const userExists = await User.findOne({ username: user.username });

    if (!userExists) {
      const error = new Error("Username not found in the database");
      error.code = 401;
      next(error);
      return;
    }

    const validPassword = await bcrypt.compare(
      user.password,
      userExists.password
    );

    if (!validPassword) {
      const error = new Error("Invalid password");
      error.code = 401;
      next(error);
      return;
    }

    req.user = userExists;
    req.auth = {
      name: userExists.name,
      id: userExists.id,
    };

    next();
  } catch (error) {
    next(error);
  }
};

const checkUserAvailavility = async (req, res, next) => {
  const user = req.body;
  console.log(req.body);
  if (!user || Object.keys(user).length !== 3 || !user.username) {
    const error = new Error("Invalid user data");
    error.code = 400;
    next(error);
    return;
  }

  const userExists = await User.findOne({ username: user.username });

  if (userExists) {
    const error = new Error("Username already exists");
    error.code = 409;
    next(error);
    return;
  }
  req.user = user;

  next();
};

module.exports = { getCredentials: checkUserAvailavility, checkCredentials };
