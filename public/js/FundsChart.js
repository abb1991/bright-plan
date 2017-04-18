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
      <div id="funds-chart-container">
        { show > 0 ?
          <table id="funds-chart-table">
            <tbody>
              <tr className="odd">
                <th></th>
                <th>Cash</th>
                <th>Index Funds</th>
                <th>REITS</th>
                <th>Gold</th>
                <th>International Equity</th>
                <th>Other</th>
              </tr>
              <tr className="even">
                <th>current</th>
                <td>{funds.cash !== "" ? funds.cash : 0}</td>
                <td>{funds.index !== "" ? funds.index : 0}</td>
                <td>{funds.reits !== "" ? funds.reits : 0}</td>
                <td>{funds.gold !== "" ? funds.gold : 0}</td>
                <td>{funds.intlEquity !== "" ? funds.intlEquity : 0}</td>
                <td>{funds.other !== "" ? funds.other : 0}</td>
              </tr>
              <tr className="odd">
                <th>change</th>
                <td className={ change.cash >= 0 ? "add-funds" : "sub-funds"}>{change.cash >= 0 ? "+" + change.cash : change.cash}</td>
                <td className={ change.index >= 0 ? "add-funds" : "sub-funds"}>{change.index >= 0 ? "+" + change.index : change.index}</td>
                <td className={ change.reits >= 0 ? "add-funds" : "sub-funds"}>{change.reits >= 0 ? "+" + change.reits : change.reits}</td>
                <td className={ change.gold >= 0 ? "add-funds" : "sub-funds"}>{change.gold >= 0 ? "+" + change.gold : change.gold}</td>
                <td className={ change.intlEquity >= 0 ? "add-funds" : "sub-funds"}>{change.intlEquity >= 0 ? "+" + change.intlEquity : change.intlEquity}</td>
                <td className={ change.other >= 0 ? "add-funds" : "sub-funds"}>{funds.other === 0 ? 0 : (-1 * funds.other)}</td>
              </tr>
              <tr className="even">
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