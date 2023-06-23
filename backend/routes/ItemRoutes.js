const express = require("express");

const { getItems, addItems } = require("../controllers/ItemsController.js");

const router = express.Router();

router.get("/", getItems);
router.post("/", addItems);

module.exports = router;
