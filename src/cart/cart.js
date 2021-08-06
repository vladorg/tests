import React from 'react';
import AppMinMax from '../inputs/minmax/minmax.js';
import styles from '../app.module.css';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class extends React.Component{

    static defaultProps = {
      changeCnt: function(cnt){},
      remove: function(i){},
      send: function(i){}
    }

    static propTypes = {
      changeCnt: PropTypes.func,
      remove: PropTypes.func,
      send: PropTypes.func,
    } 

    // вызов колбека из пропсов с передачей индекса товара и нового количества на изменение cnt в родителе App
    onChange = (i, cnt) => {
      this.props.changeCnt(i, cnt);
    }
    
    // вызов колбека из пропсов с передачей индекса товара на удаление продукта в родителе App
    remove = (i) => {
      this.props.remove(i);
    }

    // вызов колбека из пропсов с передачей шага
    send = () => {
      this.props.send(2);
    }

    render(){      
      let productsRows = this.props.products.map((product, i) => {
          return (
              <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>
                      <AppMinMax min={1} 
                                  max={product.rest} 
                                  cnt={product.current} 
                                  onChange={(cnt) => this.onChange(i, cnt)}
                      />
                  </td>
                  <td>{product.price * product.current}</td>
                  <td>
                      <Button 
                        variant="primary" 
                        onClick={() => this.remove(i)}
                        >
                          X
                      </Button>
                  </td>
              </tr>
          );
      });

      return (
        <div>
          <h2>Cart</h2>
          <table className="table table-bordered">
              <thead>
                  <tr>
                      <td>Title</td>
                      <td>Price</td>
                      <td>Count</td>
                      <td>Total</td>
                      <td>Actions</td>
                  </tr>
              </thead>
              <tbody>
                  {productsRows}
              </tbody> 
          </table>
          <h3>Total: {this.props.total}</h3>
          <hr/>
          <Button variant="primary" onClick={() => this.send()}>Send</Button>
        </div>
      );
    }
}
