import React from 'react';
import Chart from 'react-apexcharts';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './langChart.css';

const LangChart = ({ value, valueMax, title }) => {
  const options = {
    series: [(value / valueMax) * 100], // Convert value to percentage
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: '70%',
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
            color: '#ffffff',
            fontSize: '17px',
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: '#ffffff',
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
    labels: [`${value} / ${valueMax}`],
    tooltip: {
      enabled: true, 
      x: {
        show: false,
      },
      y: {
        formatter: function (val) {
          return `${val.toFixed(2)}%`; 
        },
      },
    },
  };

  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate('/details');
  };

  return (
    <div className="speedometer-container">
      <Chart options={options} series={options.series} type="radialBar" height={350} />
      <h1 className='h-title'>{title}</h1>
      <button className="openapi" onClick={handleDetailsClick}>
        <b className="details2">Details</b>
      </button>
    </div>
  );
};

export default LangChart;