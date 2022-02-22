const express = require("express");
const { getItems } = require("../constrollers/itemControllers");
const { verifyUserToken } = require("../middlewares/auth");

const router = express.Router();

router.get("/list", verifyUserToken, getItems);

module.exports = router;
