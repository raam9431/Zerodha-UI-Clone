import React from 'react';
import { PieChart } from 'lucide-react';

const Portfolio = () => {
  const holdings = [
    { name: 'TCS', quantity: 10, avgPrice: 3450.75, ltp: 3575.20, change: '+3.60%' },
    { name: 'HDFC Bank', quantity: 25, avgPrice: 1580.50, ltp: 1622.30, change: '+2.65%' },
    { name: 'Reliance', quantity: 15, avgPrice: 2340.25, ltp: 2298.45, change: '-1.78%' },
  ];

  return (
    <div className="bg-white dark:bg-zerodha-800 rounded-lg shadow-sm p-4 sm:p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Portfolio</h2>
        <PieChart className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </div>

      <div className="overflow-x-auto -mx-4 sm:-mx-6">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                <th className="px-4 sm:px-6 pb-4">Stock</th>
                <th className="px-4 sm:px-6 pb-4">Qty</th>
                <th className="px-4 sm:px-6 pb-4">Avg. Price</th>
                <th className="px-4 sm:px-6 pb-4">LTP</th>
                <th className="px-4 sm:px-6 pb-4">Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-zerodha-900">
              {holdings.map((stock) => (
                <tr key={stock.name} className="text-xs sm:text-sm">
                  <td className="px-4 sm:px-6 py-4 text-gray-900 dark:text-white font-medium whitespace-nowrap">
                    {stock.name}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-gray-600 dark:text-gray-300 whitespace-nowrap">
                    {stock.quantity}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-gray-600 dark:text-gray-300 whitespace-nowrap">
                    ₹{stock.avgPrice.toFixed(2)}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-gray-900 dark:text-white whitespace-nowrap">
                    ₹{stock.ltp.toFixed(2)}
                  </td>
                  <td className={`px-4 sm:px-6 py-4 whitespace-nowrap ${
                    stock.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {stock.change}
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

export default Portfolio;