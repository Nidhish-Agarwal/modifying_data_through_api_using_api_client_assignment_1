const menuModel = require("../model/menu.model.js");

async function createMenuItem(req, res) {
  try {
    const newItem = new menuModel(req.body);
    await newItem.save();
    return res.status(201).json({ message: "Item Sucessfully Added" });
  } catch (err) {
    if (err.name == "ValidationError") {
      console.log("Validation Error");
      return res.status(400).json({ message: err });
    }
    return res.status(500).json({ message: err });
  }
}

async function getMenuItems(req, res) {
  try {
    const data = await menuModel.find();
    return res.status(200).json({ data, message: "Data Fetched Sucessfully" });
  } catch (er) {
    return res.status(500).json({ message: er.message });
  }
}

module.exports = { createMenuItem, getMenuItems };
