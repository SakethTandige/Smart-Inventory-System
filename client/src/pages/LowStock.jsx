import { useState, useEffect } from 'react';
import { productAPI } from '../services/api';

export default function LowStock() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchLowStockProducts();
  }, []);

  const fetchLowStockProducts = async () => {
    try {
      setLoading(true);
      const response = await productAPI.getLowStockProducts();
      setProducts(response.data.products);
      setError('');
    } catch (err) {
      setError('Failed to load low stock products');
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

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Low Stock Products</h1>
        <p className="text-gray-600">Items that need attention and reordering</p>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {products.length === 0 ? (
          <div className="p-12 text-center">
            <div className="text-6xl mb-4">✨</div>
            <p className="text-gray-600 text-lg">Great! All products are well stocked!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-yellow-100 to-orange-100 border-b-2 border-yellow-200">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-800">Product Name</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-800">Category</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-800">Current Qty</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-800">Threshold</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-800">Supplier</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-800">Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={product._id}
                    className={`border-b hover:bg-yellow-50 transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4 text-gray-800 font-semibold">{product.name}</td>
                    <td className="px-6 py-4 text-gray-600">{product.category}</td>
                    <td className="px-6 py-4">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-semibold">
                        {product.quantity}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{product.lowStockThreshold}</td>
                    <td className="px-6 py-4 text-gray-600 font-semibold">{product.supplier}</td>
                    <td className="px-6 py-4">
                      {product.quantity === 0 ? (
                        <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold">
                          🚨 Out of Stock
                        </span>
                      ) : (
                        <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold">
                          ⚠️ Low Stock
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
