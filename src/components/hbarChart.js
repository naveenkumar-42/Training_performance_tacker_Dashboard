import React from 'react';
import Chart from 'react-apexcharts';
import './hbarChart.css';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      options: {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        colors: ['#00E396'],
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val;
          },
        },
        xaxis: {
          tickAmount: 10,
          labels: {
            formatter: function (val) {
              return Math.floor(val);
            },
          },
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ['Actual', 'Expected'],
          markers: {
            fillColors: ['#00E396', '#775DD0'],
          },
          labels: {
            colors: ['#e9ecf1', '#e9ecf1'],
          },
        },
      },
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/s_archivement');
      const data = await response.json();

      // Prepare data for the chart
      const seriesData = [
        {
          name: 'Actual',
          data: [
            {
              x: 'Technical',
              y: data[0].tc,
              goals: [{ name: 'Expected', value: data[0].tc_max, strokeColor: '#775DD0' }],
            },
            {
              x: 'Paper',
              y: data[0].pp,
              goals: [{ name: 'Expected', value: data[0].pp_max, strokeColor: '#775DD0' }],
            },
            {
              x: 'Project',
              y: data[0].pc,
              goals: [{ name: 'Expected', value: data[0].pc_max, strokeColor: '#775DD0' }],
            },
            {
              x: 'Internship',
              y: data[0].in,
              goals: [{ name: 'Expected', value: data[0].in_max, strokeColor: '#775DD0' }],
            },
            {
              x: 'Product',
              y: data[0].Product,
              goals: [{ name: 'Expected', value: data[0].Product_max, strokeColor: '#775DD0' }],
            },
            {
              x: 'Patent',
              y: data[0].Patent,
              goals: [{ name: 'Expected', value: data[0].Patent_max, strokeColor: '#775DD0' }],
            },
            {
              x: 'Online Courses',
              y: data[0].oc,
              goals: [{ name: 'Expected', value: data[0].oc_max, strokeColor: '#775DD0' }],
            },
          ],
        },
      ];

      this.setState({ series: seriesData });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  render() {
    return (
      <div className="apex-chart-container">
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
