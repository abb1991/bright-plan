import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { CounterActions } from './actions'

class App extends React.Component {

  constructor(props){
    super(props);
  }

  addRiskLevel(){
    this.props.testClick();
  }

  render(){
    return(
      <div>
        <h2 id="risk-level">risk level: {this.props.riskLevel}</h2>
        <form onSubmit={this.addRiskLevel.bind(this)}>
          <input name="risk-level" placeholder="what is your risk level?" />
          <input type="submit" value="submit" />
        </form>
      </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addRiskLevel: () => dispatch(RiskActions('AddRiskLevel'))
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