import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';

// Register the required components
Chart.register(ArcElement, Tooltip, Legend, Title);

const PresentChart = ({ pd, td }) => {
  const data = {
    labels: ["Present Days", "Absent Days"],
    datasets: [
      {
        data: [pd, td - pd],
        backgroundColor: ["#4caf50", "#36a3eb"],
        hoverBackgroundColor: ["#66bb6a", "#8dc5eb"]
      }
    ]
  };

  const options = {
    title: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const total = dataset.data.reduce((previousValue, currentValue) => previousValue + currentValue);
          const currentValue = dataset.data[tooltipItem.index];
          const percentage = Math.floor(((currentValue / total) * 100) + 0.5);
          return `${data.labels[tooltipItem.index]}: ${currentValue} (${percentage}%)`;
        }
      }
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: '#333',
        fontSize: 14
      }
    }
  };
  

  return <Doughnut data={data} options={options} />;
};

export default PresentChart;