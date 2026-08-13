import { useState, useEffect } from 'react';
import { dashboardAPI, productAPI } from '../services/api';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCategories: 0,
    lowStock: 0,
    outOfStock: 0,
    inventoryValue: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      setLoading(true);
      const response = await dashboardAPI.getDashboardStats();
      setStats(response.data);
      setError('');
    } catch (err) {
      setError('Failed to load dashboard stats');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Products',
      value: stats.totalProducts,
      icon: '📦',
      bgGradient: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-600',
    },
    {
      title: 'Categories',
      value: stats.totalCategories,
      icon: '🏷️',
      bgGradient: 'from-green-500 to-green-600',
      textColor: 'text-green-600',
    },
    {
      title: 'Low Stock',
      value: stats.lowStock,
      icon: '⚠️',
      bgGradient: 'from-yellow-500 to-yellow-600',
      textColor: 'text-yellow-600',
    },
    {
      title: 'Out of Stock',
      value: stats.outOfStock,
      icon: '❌',
      bgGradient: 'from-red-500 to-red-600',
      textColor: 'text-red-600',
    },
    {
      title: 'Inventory Value',
      value: `$${stats.inventoryValue?.toFixed(2) || 0}`,
      icon: '💰',
      bgGradient: 'from-purple-500 to-purple-600',
      textColor: 'text-purple-600',
    },
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to your inventory management system</p>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
        {statCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
          >
            <div className={`bg-gradient-to-r ${card.bgGradient} p-6 text-white`}>
              <div className="text-4xl mb-2">{card.icon}</div>
              <h3 className="text-sm font-semibold opacity-90">{card.title}</h3>
            </div>
            <div className="p-6">
              <p className={`text-3xl font-bold ${card.textColor}`}>
                {card.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="/products"
            className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center transform hover:scale-105"
          >
            <span className="text-2xl mr-3">📦</span>
            Manage Products
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
          </a>
          <a
            href="/low-stock"
            className="group relative bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center transform hover:scale-105"
          >
            <span className="text-2xl mr-3">⚠️</span>
            View Low Stock Items
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
