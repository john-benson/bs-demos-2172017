const React = require('react');
const Chart = require('react-google-charts').Chart;

const Charts = () => {
  return (<Chart
    chartType="ScatterChart"
    data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
    options={{}}
    graph_id="ScatterChart"
    width="100%"
    height="400px"
    legend_toggle
   />);
}

module.exports = Charts;
