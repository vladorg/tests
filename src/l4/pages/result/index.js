import React from 'react';

import cartModel from '~s/cart.js';
import orderModel from '~s/order.js';

export default class extends React.Component{
    render(){
        
        let productRows = cartModel.products.map((product, i) => {
            return (
                <tr key={i}>
                    <td>{product.title}</td>
                    <td>{product.current}</td>
                </tr>
            );
        });

        return (
            <div>
                <h2>Congratulations!</h2>
                <p>You're ordered is next products:</p>
                <table className="table table-bordered">
                    <tbody>
                        {productRows}
                    </tbody>
                </table>
                <p>Total: <strong>{cartModel.total}</strong></p>
                <hr/>
                <h5>Your order data:</h5>
                <div>
                    {orderModel.user_data}
                </div>
                <hr/>
                <h3>Thank You!</h3>
            </div>
        )
    }
}