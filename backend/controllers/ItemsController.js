const Item = require("../models/ItemsModel");

const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addItems = async (req, res) => {
  const { item, price } = req.body;
  try {
    const newItem = await Item.create({ item, price });
    res.json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getItems, addItems };
