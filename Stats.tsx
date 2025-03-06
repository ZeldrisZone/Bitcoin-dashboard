import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Clock } from 'lucide-react';
import { BitcoinData } from '../types';

interface StatsProps {
  data: BitcoinData;
}

export const Stats: React.FC<StatsProps> = ({ data }) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(num);
  };

  const formatLargeNumber = (num: number) => {
    if (num >= 1e12) return `${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`;
    return formatNumber(num);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Current Price</p>
            <p className="text-2xl font-bold">{formatNumber(data.current_price)}</p>
          </div>
          <DollarSign className="text-green-500" size={24} />
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">24h Change</p>
            <p className={`text-2xl font-bold ${data.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {data.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
          {data.price_change_percentage_24h >= 0 ? (
            <TrendingUp className="text-green-500" size={24} />
          ) : (
            <TrendingDown className="text-red-500" size={24} />
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Market Cap</p>
            <p className="text-2xl font-bold">{formatLargeNumber(data.market_cap)}</p>
          </div>
          <BarChart3 className="text-blue-500" size={24} />
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Last Updated</p>
            <p className="text-lg font-bold">
              {new Date(data.last_updated).toLocaleTimeString()}
            </p>
          </div>
          <Clock className="text-gray-500" size={24} />
        </div>
      </div>
    </div>
  );
};