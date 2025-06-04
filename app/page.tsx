import { getTopCoins, getCoinMarketChart } from '../lib/coingecko';
import CryptoChart from '../components/CryptoChart';
import TopCoinsTable from '../components/TopCoinsTable';

export default async function HomePage() {
  const coins = await getTopCoins();
  const chartData = await getCoinMarketChart(coins[0].id);

  return (
    <div>
      <h1>{coins[0].name} - 24-Hour Price Chart</h1>
      <CryptoChart data={chartData} />
      <h2>Top 100 Cryptocurrencies</h2>
      <TopCoinsTable coins={coins} />
    </div>
  );
}
