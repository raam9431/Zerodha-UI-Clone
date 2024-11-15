import React from 'react';
import MarketOverview from '../components/MarketOverview';
import Portfolio from '../components/Portfolio';
import Watchlist from '../components/Watchlist';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <MarketOverview />
          <Portfolio />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Watchlist />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;