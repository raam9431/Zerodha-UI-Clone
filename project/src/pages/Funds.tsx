import React from 'react';
import { Wallet, CreditCard, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

const Funds = () => {
  const fundDetails = {
    available: 50000.00,
    used: 25000.00,
    total: 75000.00
  };

  const recentTransactions = [
    { id: 1, type: 'deposit', amount: 10000, date: '2024-03-15', status: 'completed' },
    { id: 2, type: 'withdrawal', amount: 5000, date: '2024-03-14', status: 'completed' },
    { id: 3, type: 'deposit', amount: 15000, date: '2024-03-12', status: 'completed' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-zerodha-800 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Available Balance</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                ₹{fundDetails.available.toFixed(2)}
              </p>
            </div>
            <Wallet className="h-8 w-8 text-primary" />
          </div>
        </div>

        <div className="bg-white dark:bg-zerodha-800 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Used Margin</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                ₹{fundDetails.used.toFixed(2)}
              </p>
            </div>
            <CreditCard className="h-8 w-8 text-primary" />
          </div>
        </div>

        <div className="bg-white dark:bg-zerodha-800 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Balance</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                ₹{fundDetails.total.toFixed(2)}
              </p>
            </div>
            <Wallet className="h-8 w-8 text-primary" />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-zerodha-800 rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-zerodha-900">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Transactions
          </h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-zerodha-900">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {transaction.type === 'deposit' ? (
                    <ArrowDownCircle className="h-8 w-8 text-green-500 mr-4" />
                  ) : (
                    <ArrowUpCircle className="h-8 w-8 text-red-500 mr-4" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {transaction.type === 'deposit' ? 'Deposit' : 'Withdrawal'}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(transaction.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${
                    transaction.type === 'deposit' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {transaction.type === 'deposit' ? '+' : '-'}₹{transaction.amount.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                    {transaction.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Funds;