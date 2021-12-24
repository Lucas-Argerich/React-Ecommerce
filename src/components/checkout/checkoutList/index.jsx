import React, { useState, useEffect } from 'react'
import { useCart } from '../../../context/cartContext'
import './index.scss'

export default function CheckoutList() {
    const { cart } = useCart()
    const [productsQuantity, setProductsQuantity] = useState(0)

    useEffect(() => {
        let newProductsQuantity = 0
        cart.addedItems.map((i) => newProductsQuantity = newProductsQuantity + i.quantity )
        setProductsQuantity(newProductsQuantity)
    }, [cart])

    return (
        <div className="checkoutListContainer">
            <div className="checkoutList">
                <h4>Totals</h4>
                <ul>
                    <li>Products: <span>{productsQuantity}</span></li>
                    <li>Subtotal: <span>${(cart.totalPrice).toFixed(2)}</span></li>
                    <li>Tax: <span>$0.00</span></li>
                    <li>Shipping: <span>$19.99</span></li>
                </ul>
                <h5>Total: <span>${(cart.totalPrice + 19.99).toFixed(2)}</span></h5>
            </div>
            <div className="checkoutInformation">

            </div>
        </div>
    )
}
