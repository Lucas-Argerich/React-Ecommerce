import React from 'react'
import { useCart } from '../../../context/cartContext'
import './index.scss'

export default function CheckoutList() {
    const { cart } = useCart()

    return (
        <div className="checkoutListContainer">
            <div className="checkoutList">
                <h4>Totals</h4>
                <ul>
                    <li>Products: <span>{cart.addedItems.length}</span></li>
                    <li>Subtotal: <span>${cart.totalPrice}</span></li>
                    <li>Tax: <span>$0.00</span></li>
                    <li>Shipping: <span>$0.00</span></li>
                </ul>
                <h5>Total: <span>$50.00</span></h5>
            </div>
            <div className="checkoutInformation">

            </div>
        </div>
    )
}
