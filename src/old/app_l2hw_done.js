import React from 'react';
import AppMinMax from './l2/5-norm.js';

export default class extends React.Component{
    state = {
        products: [
            {
                id: 100,
                title: 'Ipnone 200',
                price: 12000,
                rest: 10,
                current: 1
            },
            {
                id: 101,
                title: 'Samsung AAZ8',
                price: 22000,
                rest: 5,
                current: 1
            },
            {
                id: 103,
                title: 'Nokia 3310',
                price: 5000,
                rest: 2,
                current: 1
            },
            {
                id: 105,
                title: 'Huawei ZZ',
                price: 15000,
                rest: 8,
                current: 1
            }
        ],
        confirmed: false
    }

    changeCnt(i, cnt){
        // по смысле this.state.products[i].current = cnt;

        let newProducts = [...this.state.products];
        let newProduct = {...newProducts[i]};
        newProduct.current = cnt;
        newProducts[i] = newProduct;
        this.setState({products: newProducts});
    }

    remove(id) {
        // удалить элемент массива товаров по id

        let newProducts = this.state.products.filter(product => product.id != id);
        this.setState({products: newProducts});
    }

    confirm() {
        this.setState({
            confirmed: true
        });
    }

    render(){
        var total = 0;
        let productsRows = this.state.products.map((product, i) => {
            total += product.price * product.current;
            return (                
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax min={1} 
                                   max={product.rest} 
                                   cnt={product.current} 
                                   onChange={(cnt) => this.changeCnt(i, cnt)}
                        />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td><button onClick={() => this.remove(product.id)}>x</button></td>
                </tr>
            );
        });


        // rendering
        if (this.state.confirmed) {
            return (
                <div>
                    <h2>Cart</h2>
                    <h3>Спасибо за заказ!</h3>
                    Товаров: <strong>{this.state.products.length}</strong>
                    <br/>
                    Заказ на сумму: <strong>{total}</strong>
                </div>
            );
        } else {
            if (this.state.products.length > 0) {
                return (                
                    <div>
                        <h2>Cart</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Title</td>
                                    <td>Price</td>
                                    <td>Count</td>
                                    <td>Total</td>
                                    <td></td>
                                </tr>
                                {productsRows}
                            </tbody> 
                        </table>
                        <hr/>
                        Товаров: <strong>{this.state.products.length}</strong>
                        <br/>
                        Сумма: <strong>{total}</strong>
                        <br/>
                        <br/>
                        <button onClick={() => this.confirm()}>Оформить заказ</button>
                        
                    </div>
                );
            } else {
                return (
                    <div>
                        <h2>Cart</h2>
                        <p>Корзина пустая!</p>
                    </div>
                );
            }
        }

        
    }
}