import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/products', label: 'Products', icon: '📦' },
    { path: '/low-stock', label: 'Low Stock', icon: '⚠️' },
  ];

  return (
    <aside className="bg-gradient-to-b from-gray-900 to-gray-800 text-white w-64 min-h-screen p-6 shadow-2xl">
      <div className="mb-8">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Menu
        </h2>
        <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
      </div>

      <nav className="space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform ${
              isActive(item.path)
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-12 pt-6 border-t border-gray-700">
        <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-4 rounded-lg">
          <p className="text-xs text-gray-400 mb-2">Version</p>
          <p className="font-bold text-white">Smart Inventory v1.0</p>
          <p className="text-xs text-gray-400 mt-2">© 2024 All rights reserved</p>
        </div>
      </div>
    </aside>
  );
}
