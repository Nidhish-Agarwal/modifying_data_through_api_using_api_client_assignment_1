const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
});

const menuModel = mongoose.model("menu", menuSchema);

module.exports = menuModel;
