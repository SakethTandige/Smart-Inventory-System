const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductStats,
  getLowStockProducts,
} = require("../controllers/productController");

router.post("/", addProduct);
router.get("/", getProducts);

// Specific routes MUST come before /:id catch-all
router.get("/stats", getProductStats);
router.get("/low-stock", getLowStockProducts);

// Generic routes
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;