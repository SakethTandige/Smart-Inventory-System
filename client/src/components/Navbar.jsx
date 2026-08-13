import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl">
      <div className="max-w-full mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📦</span>
          <h1 className="text-2xl font-bold">Smart Inventory System</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-blue-500 bg-opacity-50 px-4 py-2 rounded-lg">
            <span className="text-xl">👤</span>
            <div>
              <p className="text-sm opacity-75">Logged in as</p>
              <p className="font-semibold">{user?.name}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}
