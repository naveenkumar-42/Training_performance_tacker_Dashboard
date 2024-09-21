import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './barChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  // Data for the bar chart
  const data = {
    labels: ['C-1', 'Java-1', 'C-2', 'Python-1', 'UI/UX-1', 'Java-2', 'C-3'],
    datasets: [
      {
        label: 'Fullstack Rank Points',
        data: [80, 100, 70, 100, 80, 100, 100],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options with custom font styles
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 18, // Custom font size for legend
          },
          color: '#e9ecf1', // Custom font color for legend
        },
      },
      title: {
        display: true,
        text: 'Fullstack Rank Points Chart',
        font: {
          size: 24, // Custom font size for the title
        },
        color: '#ffffff', // Custom font color for the title
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          font: {
            size: 14, // Custom font size for y-axis labels
          },
          color: '#e9ecf1', // Custom font color for y-axis labels
        },
      },
      x: {
        ticks: {
          font: {
            size: 14, // Custom font size for x-axis labels
          },
          color: '#e9ecf1', // Custom font color for x-axis labels
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
