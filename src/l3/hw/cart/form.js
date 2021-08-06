import React from 'react';
import PropTypes from 'prop-types';
import AppLazyInput from '../inputs/lazy/lazy.js';

export default class extends React.Component {

  static defaultProps = {
    loadData: function(data){}
  }

  static propTypes = {
    loadData: PropTypes.func
  }

  send = e => {
    e.preventDefault();
    let btn = e.target;
    let form = btn.closest('#form');
    let data = new FormData(form);
    let dialog = confirm('Подтверждение заказа?');
    
    if (dialog) {
      this.props.loadData(data, 3);
    }
  }



  render() {
    return (
      <div>
        <h2>Укажите данные:</h2>
        <form id="form">
          <div>
            <input type="text" name="name" placeholder="Имя"/>
          </div>
          <br/>
          <div>
            <input type="text" name="phone" placeholder="Телефон"/>
          </div>
          <br/>
          <div>
            <input type="text" name="email" placeholder="Email"/>
          </div>
          <br/>
          <button onClick={e => this.send(e)}>Send</button>
        </form>
      </div>
    );
  }






}