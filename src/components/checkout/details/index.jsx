import React from 'react'
import CartList from '../../cart/cartList'
import { useCart } from '../../../context/cartContext'
import './index.scss'

export default function Details(props) {

    const { cart } = useCart()

    if (props.currentStep !== 1) {
        return null;
    }

    return (
        <div className="checkoutDetails">
            <h2 className="checkoutTitle">1. Details</h2>
            <button className="checkoutButton" onClick={props.next} disabled={cart.addedItems.length == 0 && true}
                style={cart.addedItems.length == 0 ? {
                    background: "#9EE2B0",
                    cursor: "default"
                } : {}}>
                Checkout
            </button>
            <CartList title="Cart" />
        </div >
    )
}