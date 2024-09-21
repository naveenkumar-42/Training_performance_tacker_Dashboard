import React from 'react';
import Chart from 'react-apexcharts';
import './langChart.css';

const LangChart = ({ value, valueMax, title }) => {
  const options = {
    series: [(value / valueMax) * 100], // Convert value to percentage
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: false, // Hide toolbar for a cleaner look
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px',
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: true,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: [`${value} / ${valueMax}`], // Show value/total
  };

  return (
    <div className="speedometer-container">
      <Chart options={options} series={options.series} type="radialBar" height={350} />
      <h1>{title}</h1>
      <button className="openapi">
        <b className="details2">Details</b>
      </button>
    </div>
  );
};

export default LangChart;
