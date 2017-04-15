import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { CounterActions } from './actions'

class App extends React.Component {

  constructor(props){
    super(props);
  }

  click(){
    this.props.testClick();
  }

  render(){
    return(
      <div>
        <h2>counter: {this.props.counter}</h2>
        <button onClick={this.click.bind(this)}>Click</button>
      </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    testClick: () => dispatch(CounterActions('Add'))
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