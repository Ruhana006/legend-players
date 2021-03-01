import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, player) => total + player.salary, 0)

    return (
        <div className="cart">
            <h1>The Final Team</h1>
            <h4>Selected Players: {cart.length}</h4>
            <h4>Player List:</h4>
            {
            cart.map(player => (
                <h6 key={player.id}>
                    Player Name: {player.name} -
                        Player Salary: ${player.salary}million
                </h6>
            ))
            }
            <h3>Total Expense: ${total} million</h3>
        </div>
    );
};

export default Cart;