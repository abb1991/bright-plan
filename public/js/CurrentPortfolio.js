import React from 'react';
const CALC = require('./InvestmentDistribution.js')

class CurrentPortfolio extends React.Component {
  constructor(props){
    super(props);
  }

  rebalance(event){
    event.preventDefault();
    const funds = {};
    funds.cash = event.target.cash.value
    funds.index = event.target.index.value
    funds.reits = event.target.reits.value
    funds.gold = event.target.gold.value
    funds.intlEquity = event.target.intlEquity.value
    funds.other = event.target.other.value
    funds.rebalanced = CALC.adjust(funds, this.props.riskLevel)
    this.props.calcRedistribution(funds)
  }

  render(){
    return(
      <div>
        <h2>Please enter dollar amounts for your current investment portfolio to recieve rebalancing suggestions</h2>
        <form id="rebalance-form" onSubmit={this.rebalance.bind(this)}>
          <label>Cash</label>
          <input name="cash" type="text" placeholder=".00" />
          <label>Index Funds</label>
          <input name="index" type="text" placeholder=".00" />
          <label>REITS</label>
          <input name="reits" type="text" placeholder=".00" />
          <label>Gold</label>
          <input name="gold" type="text" placeholder=".00" />
          <label>International Equity</label>
          <input name="intlEquity" type="text" placeholder=".00" />
          <label>Other</label>
          <input name="other" type="text" placeholder=".00" />
          <input type="submit" value="adjust" />
        </form>
      </div>
      )
  }
}

export default CurrentPortfolio