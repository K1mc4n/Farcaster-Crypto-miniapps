"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Daftarkan komponen Chart.js yang diperlukan
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface CryptoChartProps {
  prices: [number, number][];
}

const CryptoChart: React.FC<CryptoChartProps> = ({ prices }) => {
  // Format data harga untuk Chart.js
  const data = {
    labels: prices.map((price) =>
      new Date(price[0]).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    ),
    datasets: [
      {
        label: "Price (USD)",
        data: prices.map((price) => price[1]),
        borderColor: "rgba(53, 162, 235, 0.8)",
        backgroundColor: "rgba(53, 162, 235, 0.4)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "24 Hour Price Chart",
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 8,
        },
      },
      y: {
        beginAtZero: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default CryptoChart;
