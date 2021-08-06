import React from 'react';

export default class extends React.Component { 

  static defaultProps = {
    onClick: function(id){}
  }

  clicker(id) {
    this.props.onClick(id);
  }

  render() {
    return (
      <button onClick={() => this.clicker(this.props.id)}>x</button>
    );
  }
}