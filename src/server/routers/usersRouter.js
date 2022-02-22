const express = require("express");
const { loginUser, registerUser } = require("../constrollers/userControllers");
const { checkCredentials } = require("../middlewares/auth");

const router = express.Router();

router.post("/login", checkCredentials, loginUser);
router.post("/register", registerUser);

module.exports = router;
