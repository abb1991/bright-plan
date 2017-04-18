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
      0: 'Low',
      5: 'Medium',
      10: 'High'
    }

    return(
        <div id="slider-bar-container">
          <Slider
            min={0}
            max={10}
            step={1}
            value={value}
            labels={l}
            onChange={this.toggleRiskLevel.bind(this)}
            onChangeComplete={this.onChangeComplete.bind(this)} />
        </div>
      )
  }
}

export default SliderBar;

