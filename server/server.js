require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/db");
const dashboardRoutes = require("./src/routes/dashboardRoutes");

app.use("/api/dashboard", dashboardRoutes);
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});