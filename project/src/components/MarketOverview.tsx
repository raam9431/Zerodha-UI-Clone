import React from 'react';
import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const MarketOverview = () => {
  const indices = [
    { name: 'NIFTY 50', value: '22,212.70', change: '+0.47%', isUp: true },
    { name: 'SENSEX', value: '73,158.24', change: '+0.52%', isUp: true },
    { name: 'BANK NIFTY', value: '46,431.45', change: '-0.12%', isUp: false },
  ];

  return (
    <div className="bg-white dark:bg-zerodha-800 rounded-lg shadow-sm p-4 sm:p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Market Overview</h2>
        <TrendingUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {indices.map((index) => (
          <div key={index.name} className="p-3 sm:p-4 border border-gray-100 dark:border-zerodha-900 rounded-lg transition-all hover:shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{index.name}</p>
                <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mt-1">
                  {index.value}
                </p>
              </div>
              <div className={`flex items-center ${
                index.isUp ? 'text-green-500' : 'text-red-500'
              }`}>
                {index.isUp ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}
                <span className="text-xs sm:text-sm ml-1">{index.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketOverview;