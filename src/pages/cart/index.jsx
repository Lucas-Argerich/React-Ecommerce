import React, { Component } from 'react'
import CheckoutForm from '../../components/checkout/checkoutForm'
import CheckoutList from '../../components/checkout/checkoutList'
import './index.scss'

export default class Cart extends Component {
    render() {
        return (
            <main className="cartContainer">
                <CheckoutForm />
                <CheckoutList />
            </main>
        )
    }
}