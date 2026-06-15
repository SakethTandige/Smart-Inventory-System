const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRoutes = require("./routes/authRoutes");

const app = express();
const productRoutes = require("./routes/productRoutes");
app.use(express.json());
app.use("/api/products", productRoutes);
app.use(cors());

app.use(morgan("dev"));

app.use("/api/auth", authRoutes);

module.exports = app;