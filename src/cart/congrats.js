import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {

  render() {
    let products = this.props.products.map((pr, i) => {
      return (
        <div key={i}>
          <span>{pr.title} --- </span>
          <span>{pr.current} шт.</span>
        </div>        
      );
    });
    let {email, name, phone} = this.props.data;

    return (
      <div>
        <h1>Congratulations! Yout order in process!</h1>
        <hr/>
        <h2>Товары:</h2>
        {products}
        <hr/>
        <h3>Всего: {this.props.total}</h3>
        <hr/>
        <h2>Ваши данные:</h2>
        <p>{name}</p>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    );
  }






}