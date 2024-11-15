import React from 'react';
import { Star, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Watchlist = () => {
  const stocks = [
    { name: 'INFY', price: '1,567.80', change: '+1.45%', isUp: true },
    { name: 'BHARTIARTL', price: '1,123.55', change: '-0.78%', isUp: false },
    { name: 'HDFCBANK', price: '1,622.30', change: '+2.65%', isUp: true },
    { name: 'TATASTEEL', price: '134.55', change: '-1.23%', isUp: false },
    { name: 'WIPRO', price: '456.70', change: '+0.89%', isUp: true },
  ];

  return (
    <div className="bg-white dark:bg-zerodha-800 rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Watchlist</h2>
        <Star className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </div>

      <div className="space-y-4">
        {stocks.map((stock) => (
          <div 
            key={stock.name}
            className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-zerodha-900 rounded-lg transition-colors duration-150"
          >
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">{stock.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">NSE</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900 dark:text-white">₹{stock.price}</p>
              <p className={`text-sm flex items-center justify-end ${
                stock.isUp ? 'text-green-500' : 'text-red-500'
              }`}>
                {stock.isUp ? (
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                )}
                {stock.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watchlist;