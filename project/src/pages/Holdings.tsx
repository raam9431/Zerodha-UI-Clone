import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const Holdings = () => {
  const holdings = [
    {
      symbol: 'TCS',
      quantity: 10,
      avgPrice: 3450.75,
      ltp: 3575.20,
      currentValue: 35752.00,
      pnl: 1244.50,
      dayChange: 2.35,
      return: 3.60
    },
    {
      symbol: 'HDFC Bank',
      quantity: 25,
      avgPrice: 1580.50,
      ltp: 1622.30,
      currentValue: 40557.50,
      pnl: 1045.00,
      dayChange: 1.85,
      return: 2.65
    }
  ];

  const totalPnL = holdings.reduce((acc, curr) => acc + curr.pnl, 0);
  const totalValue = holdings.reduce((acc, curr) => acc + curr.currentValue, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-zerodha-800 rounded-lg shadow-sm mb-6">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Investment Value</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                ₹{totalValue.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Day's P&L</p>
              <p className={`text-2xl font-semibold ${totalPnL >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                ₹{totalPnL.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total P&L</p>
              <p className={`text-2xl font-semibold ${totalPnL >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                ₹{totalPnL.toFixed(2)}
              </p>
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
                <th className="px-6 py-4">Quantity</th>
                <th className="px-6 py-4">Avg. Cost</th>
                <th className="px-6 py-4">LTP</th>
                <th className="px-6 py-4">Current Value</th>
                <th className="px-6 py-4">P&L</th>
                <th className="px-6 py-4">Day Change</th>
                <th className="px-6 py-4">Overall Return</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-zerodha-900">
              {holdings.map((holding) => (
                <tr key={holding.symbol} className="text-sm">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {holding.symbol}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    {holding.quantity}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    ₹{holding.avgPrice.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">
                    ₹{holding.ltp.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">
                    ₹{holding.currentValue.toFixed(2)}
                  </td>
                  <td className={`px-6 py-4 ${holding.pnl >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    ₹{holding.pnl.toFixed(2)}
                  </td>
                  <td className={`px-6 py-4 ${holding.dayChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    <span className="flex items-center">
                      {holding.dayChange >= 0 ? (
                        <TrendingUp className="h-4 w-4 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 mr-1" />
                      )}
                      {holding.dayChange}%
                    </span>
                  </td>
                  <td className={`px-6 py-4 ${holding.return >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {holding.return}%
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

export default Holdings;