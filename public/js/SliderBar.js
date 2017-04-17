// Using an ES6 transpiler like Babel
import React from 'react';
import Slider from 'react-rangeslider'

class SliderBar extends React.Component {
  constructor(props){
    super(props);
  }

  toggleRiskLevel(value){
    this.props.changeRiskLevel(value);
  }

  onChangeComplete(e) {
    console.log('done')
  }

  render(){
    const value = this.props.riskLevel || 0;
    const l = {
      0: 'Low Risk',
      5: 'Medium Risk',
      10: 'High Risk'
    }

    return(
        <div>
          <Slider
            min={0}
            max={10}
            step={1}
            value={value}
            labels={l}
            onChange={this.toggleRiskLevel.bind(this)}
            onChangeComplete={this.onChangeComplete.bind(this)} />
          <h2 id="risk-level">risk level: {value}</h2>
        </div>
      )
  }
}

export default SliderBar;

