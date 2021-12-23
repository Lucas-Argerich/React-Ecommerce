import React from 'react'
import './index.scss'

export default function CheckoutList() {
    return (
        <div className="checkoutListContainer">
            <div className="checkoutList">
                <h4>Totals</h4>
                <ul>
                {/*sample*/}
                    <li>Products: <span>1</span></li>
                    <li>Subtotal: <span>$50.00</span></li>
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
