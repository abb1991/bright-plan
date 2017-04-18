import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { RiskActions, FundsActions } from './actions';
import Chart from './Chart'
import SliderBar from './SliderBar'
import FundsChart from './FundsChart'
import CurrentPortfolio from './CurrentPortfolio'
import Navbar from './navbar'


class App extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Navbar riskLevel={this.props.riskLevel} />
        <Chart riskLevel={this.props.riskLevel} />
        <SliderBar riskLevel={this.props.riskLevel} changeRiskLevel={this.props.changeRiskLevel} />
        <CurrentPortfolio riskLevel={this.props.riskLevel} funds={this.props.funds} calcRedistribution={this.props.calcRedistribution} />
        <FundsChart riskLevel={this.props.riskLevel} funds={this.props.funds} />
      </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeRiskLevel:  (num) => dispatch(RiskActions(num)),
    calcRedistribution: (funds)=> dispatch(FundsActions(funds))
  }
}

const mapStateToProps = (state) => {
  return state;
}

const DefaultApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default DefaultApp;