const express = require("express");

const {
  createMenuItem,
  getMenuItems,
} = require("../controllers/menu.controller.js");

const router = express.Router();

router.post("/add-item", createMenuItem);

router.get("/get-items", getMenuItems);

module.exports = router;
