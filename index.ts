export interface BitcoinData {
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
  last_updated: string;
}

export interface MarketChart {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

// Mock data
export const mockBitcoinData: BitcoinData = {
  current_price: 52387.42,
  market_cap: 1028476291584,
  total_volume: 24586931245,
  price_change_percentage_24h: 2.45,
  last_updated: new Date().toISOString()
};

// Generate 30 days of mock price data
export const mockChartData: MarketChart = {
  prices: Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return [
      date.getTime(),
      50000 + Math.random() * 5000 // Random price between 50000 and 55000
    ];
  }),
  market_caps: [],
  total_volumes: []
};