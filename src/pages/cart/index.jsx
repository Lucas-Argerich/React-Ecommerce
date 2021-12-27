import React, { Component } from 'react'
import CheckoutForm from '../../components/checkout/checkoutForm'

export default class Cart extends Component {
    render() {
        return (
            <main className="cartContainer">
                <CheckoutForm />
            </main>
        )
    }
}