const Item = require("../../database/models/Item");

const getItems = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const items = await Item.find({ user: userId });
    res.json({ items });
  } catch (error) {
    next(error);
  }
};

module.exports = { getItems };
