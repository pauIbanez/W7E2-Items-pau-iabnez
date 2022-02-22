

const express = require("express");
const { getItems } = require("../constrollers/itemControllers");


const router = express.Router();

router.post("/list", , getItems);

module.exports = router;
