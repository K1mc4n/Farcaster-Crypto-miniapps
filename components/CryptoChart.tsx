import { Line } from 'react-chartjs-2';

const CryptoChart = ({ data }) => {
  const chartData = {
    labels: data.prices.map((p) => new Date(p[0]).toLocaleTimeString()),
    datasets: [
      {
        label: 'Price (USD)',
        data: data.prices.map((p) => p[1]),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default CryptoChart;
