import React from 'react';
import Chart from 'react-apexcharts';
import './hbarChart.css';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    const seriesData = [
      {
        name: 'Actual',
        data: [
          {
            x: 'Technical',
            y: 2,
            goals: [{ name: 'Expected', value: 3, strokeColor: '#775DD0' }]
          },
          {
            x: 'Paper ',
            y: 1,
            goals: [{ name: 'Expected', value: 2, strokeColor: '#775DD0' }]
          },
          {
            x: 'Project ',
            y: 3,
            goals: [{ name: 'Expected', value: 3, strokeColor: '#775DD0' }]
          },
          {
            x: 'Internship',
            y: 1,
            goals: [{ name: 'Expected', value: 2, strokeColor: '#775DD0' }]
          },
          {
            x: 'Product',
            y: 2,
            goals: [{ name: 'Expected', value: 2, strokeColor: '#775DD0' }]
          },
          {
            x: 'Patent',
            y: 0,
            goals: [{ name: 'Expected', value: 1, strokeColor: '#775DD0' }]
          },
          {
            x: 'Online Courses',
            y: 2,
            goals: [{ name: 'Expected', value: 3, strokeColor: '#775DD0' }]
          }
        ]
      }
    ];

    const maxExpectedValue = Math.max(...seriesData[0].data.map(item => item.goals[0].value));

    this.state = {
      series: seriesData,
      options: {
        chart: {
          height: 350,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        colors: ['#00E396'],
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return val;
          }
        },
        xaxis: {
          tickAmount: maxExpectedValue,
          labels: {
            formatter: function (val) {
              return Math.floor(val);
            }
          },
          max: maxExpectedValue,
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ['Actual', 'Expected'],
          markers: {
            fillColors: ['#00E396', '#775DD0']
          },
          labels: {
            colors: ['#e9ecf1', '#e9ecf1']
          }
        }
      }
    };
  }

  render() {
    return (
      <div className="apex-chart-container">
        {/* Add Heading Here */}
        <h2 className="heading-title">Student Achievements</h2>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={230}
          width={400}
        />
      </div>
    );
  }
}

export default ApexChart;
