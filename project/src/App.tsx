import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Holdings from './pages/Holdings';
import Positions from './pages/Positions';
import Funds from './pages/Funds';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'orders':
        return <Orders />;
      case 'holdings':
        return <Holdings />;
      case 'positions':
        return <Positions />;
      case 'funds':
        return <Funds />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-zerodha-900 transition-colors duration-200">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
      </div>
    </ThemeProvider>
  );
}

export default App;