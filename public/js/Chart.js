import React from 'react';
import DonutChart from 'react-donut-chart';
// import { InvestmentDirstribution } from './InvestmentDistribution';
const CALC = require('./InvestmentDistribution.js')

class Chart extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    var e = CALC
    console.log(e.calcRiskPercentage(1))

    return(
      <div>
        <DonutChart
            data={[{
                label: 'Index Funds',
                value: 25
            },
            {
                label: 'REITS',
                value: 30
            },
            {
                label: 'ETFs',
                value: 10
            },
            {
                label: 'Emerging Markets',
                value: 15
            },
            {
                label: 'Cash',
                value: 20
            }]} />
      </div>
    )
  }
}

export default Chart;