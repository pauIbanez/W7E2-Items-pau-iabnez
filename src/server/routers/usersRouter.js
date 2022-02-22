const express = require("express");
const { loginUser, registerUser } = require("../constrollers/userControllers");
const { checkCredentials, getCredentials } = require("../middlewares/auth");

const router = express.Router();

router.post("/login", checkCredentials, loginUser);
router.post("/register", getCredentials, registerUser);

module.exports = router;
