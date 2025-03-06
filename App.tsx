import React from 'react';
import { Bitcoin } from 'lucide-react';
import { Stats } from './components/Stats';
import { PriceChart } from './components/PriceChart';
import { mockBitcoinData, mockChartData } from './types';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center space-x-4">
          <Bitcoin className="text-blue-500" size={32} />
          <h1 className="text-3xl font-bold text-gray-900">Bitcoin Dashboard</h1>
        </div>

        <Stats data={mockBitcoinData} />

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Price History</h2>
          <PriceChart data={mockChartData.prices} />
        </div>
      </div>
    </div>
  );
}

export default App;