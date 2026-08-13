const Product = require("../models/Product");

const getDashboardStats = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();

    const lowStock = await Product.countDocuments({
      quantity: { $gt: 0, $lt: 10 },
    });

    const outOfStock = await Product.countDocuments({
      quantity: 0,
    });

    const inventory = await Product.find();

    const inventoryValue = inventory.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    const categories = await Product.distinct("category");

    res.json({
      totalProducts,
      totalCategories: categories.length,
      lowStock,
      outOfStock,
      inventoryValue,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDashboardStats,
};