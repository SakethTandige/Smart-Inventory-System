import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCategories: 0,
    lowStock: 0,
    outOfStock: 0,
    inventoryValue: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/dashboard");
        setStats(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>

      <div className="row mt-4">
        <div className="col-md-4 mb-3">
          <div className="card shadow">
            <div className="card-body">
              <h5>Total Products</h5>
              <h3>{stats.totalProducts}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow">
            <div className="card-body">
              <h5>Total Categories</h5>
              <h3>{stats.totalCategories}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow">
            <div className="card-body">
              <h5>Low Stock</h5>
              <h3>{stats.lowStock}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow">
            <div className="card-body">
              <h5>Out of Stock</h5>
              <h3>{stats.outOfStock}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow">
            <div className="card-body">
              <h5>Inventory Value</h5>
              <h3>₹{stats.inventoryValue}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;