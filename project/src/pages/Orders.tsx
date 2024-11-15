import React, { useState } from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

const Orders = () => {
  const [activeTab, setActiveTab] = useState('open');
  
  const orders = {
    open: [
      { id: 1, symbol: 'INFY', type: 'LIMIT', side: 'BUY', quantity: 10, price: 1567.80, status: 'PENDING' }
    ],
    executed: [
      { id: 2, symbol: 'TCS', type: 'MARKET', side: 'SELL', quantity: 5, price: 3575.20, status: 'COMPLETED' },
      { id: 3, symbol: 'RELIANCE', type: 'LIMIT', side: 'BUY', quantity: 8, price: 2340.25, status: 'COMPLETED' }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-zerodha-800 rounded-lg shadow-sm">
        <div className="border-b border-gray-200 dark:border-zerodha-900">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('open')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'open'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Open Orders
            </button>
            <button
              onClick={() => setActiveTab('executed')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'executed'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Executed Orders
            </button>
          </nav>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 dark:text-gray-400">
                <th className="px-6 py-4">Time</th>
                <th className="px-6 py-4">Symbol</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Side</th>
                <th className="px-6 py-4">Quantity</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-zerodha-900">
              {orders[activeTab as keyof typeof orders].map((order) => (
                <tr key={order.id} className="text-sm">
                  <td className="px-6 py-4 text-gray-900 dark:text-white">
                    {new Date().toLocaleTimeString()}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {order.symbol}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    {order.type}
                  </td>
                  <td className={`px-6 py-4 ${
                    order.side === 'BUY' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {order.side}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    {order.quantity}
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">
                    ₹{order.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center ${
                      order.status === 'COMPLETED' ? 'text-green-500' : 'text-yellow-500'
                    }`}>
                      {order.status === 'COMPLETED' ? (
                        <CheckCircle className="h-4 w-4 mr-1" />
                      ) : (
                        <Clock className="h-4 w-4 mr-1" />
                      )}
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;