import React from 'react';
import { TrendingUp, BarChart3, PieChart } from 'lucide-react';
import Watchlist from './Watchlist';
import Portfolio from './Portfolio';
import MarketOverview from './MarketOverview';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Market Overview */}
        <div className="col-span-12 lg:col-span-8">
          <MarketOverview />
          <Portfolio />
        </div>

        {/* Watchlist */}
        <div className="col-span-12 lg:col-span-4">
          <Watchlist />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;