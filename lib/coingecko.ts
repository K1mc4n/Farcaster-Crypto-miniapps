import axios from 'axios';

const API_BASE = 'https://api.coingecko.com/api/v3';

export const getTopCoins = async () => {
  const response = await axios.get(`${API_BASE}/coins/markets`, {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 100,
      page: 1,
      price_change_percentage: '24h',
    },
  });
  return response.data;
};

export const getCoinMarketChart = async (id: string) => {
  const response = await axios.get(`${API_BASE}/coins/${id}/market_chart`, {
    params: {
      vs_currency: 'usd',
      days: 1,
      interval: 'hourly',
    },
  });
  return response.data;
};
