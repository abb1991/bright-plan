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
      <div>
        <DonutChart
            data={[{
                label: 'Index Funds',
                value: e.index
            },
            {
                label: 'REITS',
                value: e.reits
            },
            {
                label: 'Gold',
                value: e.gold
            },
            {
                label: 'International Equity',
                value: e.intlEquity
            },
            {
                label: 'Cash',
                value: e.cash
            }]} />
      </div>
    )
  }
}

export default Chart;