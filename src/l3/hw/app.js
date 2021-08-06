import React from 'react';
import AppMinMax from './inputs/minmax/minmax.js';
import styles from './app.module.css';
import { Button } from 'react-bootstrap';
import Cart from './cart/cart.js';
import Form from './cart/form.js';
import Congrats from './cart/congrats.js';

export default class extends React.Component{
    state = {
        products: getProducts(),
        currentStep: 1,
        name: null,
        phone: null,
        email: null
    }

    changeCnt(i, cnt){
        let products = [...this.state.products];
        products[i] = {...products[i], current: cnt};
        this.setState({products});
    }

    remove(i){
        let products = [...this.state.products];
        products.splice(i, 1);
        this.setState({products});
    }

    loadData = (data, step) => {
        for (let item of data.keys()) {
            this.setState({
                [item]: data.get(item),
                currentStep: step
            });  
        }
    }

    changeStep = (step) => {
        this.setState({
            currentStep: step
        });
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
    }

    render(){
        let total = this.state.products.reduce((t, pr) => {
            return t + (pr.current * pr.price);
        }, 0);
        let userData = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email
        }

        switch(this.state.currentStep) {
            case 1:
                return (
                    <div className="container">
                        <Cart 
                            products={this.state.products} 
                            total={total}
                            changeCnt={(i, cnt) => this.changeCnt(i, cnt)} 
                            remove={i => this.remove(i)}
                            send={step => this.changeStep(step)}
                        />
                    </div>
                );
            case 2:
                return (
                    <div className="container">
                        <Form 
                            loadData={(data, step) => this.loadData(data, step)}
                        />
                    </div>                    
                );
            case 3:
                return (
                    <div className="container">
                        <Congrats 
                            products={this.state.products}
                            total={total}
                            data={userData}
                        />
                    </div>                    
                );
            break;
        }
    }
}

function getProducts(){
    return [
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
    ];
}

