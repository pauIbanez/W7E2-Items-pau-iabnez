const express = require("express");
const { loginUser, registerUser } = require("../constrollers/userControllers");
const {
  checkCredentials,
  checkUserAvailavility,
} = require("../middlewares/auth");

const router = express.Router();

router.post("/login", checkCredentials, loginUser);
router.post("/register", checkUserAvailavility, registerUser);

module.exports = router;
