import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Modal} from 'react-bootstrap';

import orderModel from '~s/order.js';
import router from '~s/router.js';

import {observer} from 'mobx-react';

@observer class Order extends React.Component{    

    orderConfirm = () => {
        orderModel.hideModal();
        router.moveTo('result');
    }

    apply = () => {
        if (orderModel.form_valid) {
            orderModel.showModal()
        } else {
            document.querySelectorAll('input').forEach(field => orderModel.changeData(field.name, field.value));
        }
    }

    changeField = (e) => {
        orderModel.changeData(e.target.name, e.target.value);
    }

    render(){
        let formFields = [];

        for(let name in orderModel.formData){
            let field = orderModel.formData[name];
            
            formFields.push(
                <Form.Group key={name} controlId={'order-form-' + name}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control 
                        type="text"
                        name={name}
                        value={field.value}
                        placeholder={field.placeholder}
                        className={field.field_class}
                        onChange={(e) => this.changeField(e)}
                        autoComplete={'off'}
                    />
                    <Form.Text className={field.msg_class}>
                        {field.msg}
                    </Form.Text>
                </Form.Group>
            );
        };

        return (
            <div>
                <h2>Order</h2>
                <hr/>

                <Form>
                    {formFields}
                </Form>

                <Button variant="warning" onClick={() => router.moveTo('cart')}>
                    Back to cart
                </Button>

                &nbsp;

                <Button variant="primary" onClick={() => this.apply()}>
                    Apply order
                </Button>

                <Modal show={orderModel.modal_status} backdrop="static">
                    <Modal.Header>
                        <Modal.Title>Check information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {orderModel.user_data}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => orderModel.hideModal()}>
                            Ooops
                        </Button>
                        <Button variant="primary" onClick={this.orderConfirm}>
                            All right
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}

export default Order;