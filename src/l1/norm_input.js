import React from 'react';
import PropTypes from 'prop-types';


export default class extends React.Component {

  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }

  state = {
    cnt: this.props.min
  }

  increase() {
    if (this.state.cnt < this.props.max) {
      this.setState({
        cnt: this.state.cnt + 1
      });
    }
    
  }

  decrease() {
    if (this.state.cnt > this.props.min) {
      this.setState({
        cnt: this.state.cnt - 1
      });
    }    
  }

  set(e) {
    this.setState({
      cnt: e.target.value
    });
  }

  update = (e) => {
    if (!isNaN(this.state.cnt)) {
      let cnt = Math.min(Math.max(this.state.cnt, this.props.min), this.props.max);
      this.setState({cnt});       
    } else {
      this.setState({
        cnt: this.props.min
      });  
    }
  }

  keyDown(e) {
    e.keyCode == 13 ? this.update() : null;
  }


  render(){
    return (
      <div>
        <button onClick={() => this.decrease()}>-</button>
        <input 
          type="text" 
          value={this.state.cnt} 
          onChange={(e) => this.set(e)}
          onBlur={this.update}
          onKeyDown={(e) => this.keyDown(e)}
        />
        <button onClick={() => this.increase()}>+</button>
      </div>     
    )
  }
}