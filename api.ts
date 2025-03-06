import axios from 'axios';
import { BitcoinData, MarketChart } from '../types';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';

export const fetchBitcoinData = async (): Promise<BitcoinData> => {
  try {
    const response = await axios.get(
      `${COINGECKO_API}/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    
    return {
      current_price: response.data.market_data.current_price.usd,
      market_cap: response.data.market_data.market_cap.usd,
      total_volume: response.data.market_data.total_volume.usd,
      price_change_percentage_24h: response.data.market_data.price_change_percentage_24h,
      last_updated: response.data.last_updated,
    };
  } catch (error) {
    console.error('Error fetching Bitcoin data:', error);
    throw error;
  }
};

export const fetchBitcoinChart = async (days: number): Promise<MarketChart> => {
  try {
    const response = await axios.get(
      `${COINGECKO_API}/coins/bitcoin/market_chart?vs_currency=usd&days=${days}&interval=daily`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching Bitcoin chart:', error);
    throw error;
  }
};