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

router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/stats", getProductStats);
router.get("/low-stock", getLowStockProducts);

module.exports = router;