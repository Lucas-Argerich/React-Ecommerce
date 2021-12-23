import React from 'react'
import CartList from '../../cart/cartList'
import './index.scss'

export default function Details(props) {

    if (props.currentStep !== 1) {
        return null;
    }
    
    return (
        <div className="checkoutDetails">
            <h2 className="checkoutTitle">1. Details</h2>
            <button className="checkoutButton" onClick={props.next}>Checkout</button>
            <CartList />
        </div>
    )
}
