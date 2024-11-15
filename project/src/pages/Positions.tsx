import React, { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const Positions = () => {
  const [activeTab, setActiveTab] = useState('day');

  const positions = {
    day: [
      {
        symbol: 'NIFTY 24MAR 22000 CE',
        product: 'MIS',
        quantity: 50,
        avgPrice: 185.25,
        ltp: 195.50,
        pnl: 512.50,
        change: 5.53
      },
      {
        symbol: 'BANKNIFTY 24MAR 46500 PE',
        product: 'NRML',
        quantity: -25,
        avgPrice: 245.75,
        ltp: 235.20,
        pnl: 263.75,
        change: -4.29
      }
    ],
    net: [
      {
        symbol: 'NIFTY 24MAR 22000 CE',
        product: 'MIS',
        quantity: 50,
        avgPrice: 185.25,
        ltp: 195.50,
        pnl: 512.50,
        change: 5.53
      }
    ]
  };

  const totalPnL = positions[activeTab as keyof typeof positions].reduce((acc, curr) => acc + curr.pnl, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-zerodha-800 rounded-lg shadow-sm mb-6">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total P&L</p>
              <p className={`text-2xl font-semibold ${totalPnL >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                ₹{totalPnL.toFixed(2)}
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('day')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'day'
                    ? 'bg-primary text-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Day
              </button>
              <button
                onClick={() => setActiveTab('net')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'net'
                    ? 'bg-primary text-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Net
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-zerodha-800 rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 dark:text-gray-400">
                <th className="px-6 py-4">Instrument</th>
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Quantity</th>
                <th className="px-6 py-4">Avg. Price</th>
                <th className="px-6 py-4">LTP</th>
                <th className="px-6 py-4">P&L</th>
                <th className="px-6 py-4">Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-zerodha-900">
              {positions[activeTab as keyof typeof positions].map((position, index) => (
                <tr key={index} className="text-sm">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {position.symbol}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    {position.product}
                  </td>
                  <td className={`px-6 py-4 ${
                    position.quantity > 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {position.quantity}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    ₹{position.avgPrice.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">
                    ₹{position.ltp.toFixed(2)}
                  </td>
                  <td className={`px-6 py-4 ${position.pnl >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    ₹{position.pnl.toFixed(2)}
                  </td>
                  <td className={`px-6 py-4 ${position.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    <span className="flex items-center">
                      {position.change >= 0 ? (
                        <TrendingUp className="h-4 w-4 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 mr-1" />
                      )}
                      {Math.abs(position.change)}%
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

export default Positions;