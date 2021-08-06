import React from 'react';


export default class extends React.Component {

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


  render(){
    return (
      <div>
        <button onClick={() => this.decrease()}>-</button>
        <strong> {this.state.cnt} </strong>
        <button onClick={() => this.increase()}>+</button>
      </div>     
    )
  }
}