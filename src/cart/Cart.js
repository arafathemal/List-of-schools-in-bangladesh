import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const amount of cart) {
        total = total + amount.budget
    }
    return (
        <div className="cart">
            <h4>Show details</h4>
            <p><span className="text-color">Add School: </span>{props.cart.length}</p>
            <p><span className="text-color">Total-budget:</span> {total}</p>

        </div>
    );
};

export default Cart;