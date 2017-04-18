import React from 'react';
import DonutChart from 'react-donut-chart';
// import { InvestmentDirstribution } from './InvestmentDistribution';
const CALC = require('./InvestmentDistribution.js')

class Chart extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    var e = CALC.calcRiskPercentage(this.props.riskLevel)
    return(
      <div id="donutchart-container">
        <DonutChart
            data={[{
                value: e.index,
                label: 'Index Funds'
            },
            {
                value: e.reits,
                label: 'REITS'
            },
            {
                value: e.gold,
                label: 'Gold'
            },
            {
                value: e.intlEquity,
                label: 'International Equity'
            },
            {
                value: e.cash,
                label: 'Cash'
            }]} />
            <hr />
      </div>
    )
  }
}

export default Chart;