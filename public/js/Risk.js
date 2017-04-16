import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { RiskActions } from './actions';
import Chart from './Chart'
import SliderBar from './SliderBar'


class App extends React.Component {

  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <SliderBar riskLevel={this.props.riskLevel} changeRiskLevel={this.props.changeRiskLevel} />
        <Chart riskLevel={this.props.riskLevel} />
      </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeRiskLevel: (num) => dispatch(RiskActions(num))
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