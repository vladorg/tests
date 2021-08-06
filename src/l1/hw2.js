import React from 'react';
import PropTypes from 'prop-types';


export default class Test extends React.Component {

  constructor(props){
    super(props);

    this.min = props.min;
    this.max = props.max;

    this.state = {
      cnt: this.min
    }
  }

  increase() {
    if (this.state.cnt < this.max) {
      this.setState({
        cnt: this.state.cnt + 1
      });
    }
    
  }

  decrease() {
    if (this.state.cnt > this.min) {
      this.setState({
        cnt: this.state.cnt - 1
      });
    }    
  }

  update(e) {
    if (!isNaN(e.target.value)) {
      if (e.target.value < this.min) {
        this.setState({
          cnt: this.min
        });
      } else if (e.target.value > this.max) {
        this.setState({
          cnt: this.max
        });
      } else {
        this.setState({
          cnt: e.target.value
        });  
      }          
    }
    
  }


  render(){
    return (
      <div>
        <button onClick={() => this.decrease()}>-</button>
        <input type="text" value={this.state.cnt} onChange={this.update.bind(this)} />
        <button onClick={() => this.increase()}>+</button>
      </div>     
    )
  }
}


Test.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number
};

Test.defaultProps = {
  min: 1,
  max: 99999
};