const Item = require("../../database/models/Item");

const getItems = (req, res, next) => {
  const userId = req.user.id;
  try {
    const items = Item.find({ user: userId });
    res.json({ items });
  } catch (error) {
    next(error);
  }
};
