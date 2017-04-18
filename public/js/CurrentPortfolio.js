import React from 'react';
const CALC = require('./InvestmentDistribution.js')

class CurrentPortfolio extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showForm: true
    }
  }

  show(){
    this.setState({showForm: !this.state.showForm})
  }

  rebalance(event){
    event.preventDefault();
    this.setState({showForm: false})
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
        <hr />
        <h2 id="current-portfolio-header">Enter dollar amounts for current investments to recieve rebalanced portfolio</h2>

        { this.state.showForm ?
        <form id="funds-form" className="form-style-4" onSubmit={this.rebalance.bind(this)}>
          <label >
            <span>Cash</span><input type="text" name="cash" placeholder=".00" />
          </label>
          <label >
            <span>Index Funds</span><input type="text" name="index" placeholder=".00" />
          </label>
          <label>
            <span>REITS</span><input type="text" name="reits" placeholder=".00" />
          </label>
          <label>
            <span>Gold</span><input type="text" name="gold" placeholder=".00" />
          </label>
          <label>
            <span>International Equity</span><input type="text" name="intlEquity" placeholder=".00" />
          </label>
          <label>
            <span>Other</span><input type="text" name="other" placeholder=".00" />
          </label>
          <label>
            <span>&nbsp;</span><input id="submit-btn" type="submit" value="adjust" />
          </label>
        </form>
        :
        !this.state.showForm && Object.getOwnPropertyNames(this.props.funds).length > 0 ?
          <button id="show-form" type="button" onClick={this.show.bind(this)}>change investment amounts</button>
        : null }
      </div>
      )
  }
}

export default CurrentPortfolio