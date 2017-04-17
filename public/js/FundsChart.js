import React from 'react';
import DonutChart from 'react-donut-chart';
// import { InvestmentDirstribution } from './InvestmentDistribution';
const CALC = require('./InvestmentDistribution.js')

class FundsChart extends React.Component {
    constructor(props) {
      super(props);
    }

  render(){
    const funds = this.props.funds
    const risk = this.props.riskLevel
    var show = Object.getOwnPropertyNames(funds).length
    if(show){
      var change = CALC.redistributeInvestments(funds, risk)
      funds.rebalanced = CALC.adjust(funds, this.props.riskLevel)
    }
    return(
      <div>
        { show > 0 ?
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>Cash</th>
                <th>Index Funds</th>
                <th>REITS</th>
                <th>Gold</th>
                <th>International Equity</th>
                <th>Other</th>
              </tr>
              <tr>
                <th>current</th>
                <td>{funds.cash}</td>
                <td>{funds.index}</td>
                <td>{funds.reits}</td>
                <td>{funds.gold}</td>
                <td>{funds.intlEquity}</td>
                <td>{funds.other}</td>
              </tr>
              <tr>
                <th>change</th>
                <td>{change.cash}</td>
                <td>{change.index}</td>
                <td>{change.reits}</td>
                <td>{change.gold}</td>
                <td>{change.intlEquity}</td>
                <td>-{funds.other}</td>
              </tr>
              <tr>
                <th>rebalanced</th>
                <td>{funds.rebalanced.cash}</td>
                <td>{funds.rebalanced.index}</td>
                <td>{funds.rebalanced.reits}</td>
                <td>{funds.rebalanced.gold}</td>
                <td>{funds.rebalanced.intlEquity}</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          : null }
      </div>
      )
  }
}

export default FundsChart;