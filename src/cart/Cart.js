import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // click to add budget
    let total = 0;
    for (const amount of cart) {
        total = total + amount.budget
    }
    // click to add name
    let newName =[];
    for(const singleName of cart){
        newName.push(singleName.name)
    }
    return (
        <div className="cart">
            <h4>Show details</h4>
            <p><span className="text-color">Add School: </span>{props.cart.length}</p>
            <p><span className="text-color">Name: </span>{newName.join(' , ')}</p>
            <p><span className="text-color">Total-budget:</span> {total}</p>
            <button className="btn btn-primary">more</button>

        </div>
    );
};

export default Cart;