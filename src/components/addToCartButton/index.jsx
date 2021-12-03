import React from 'react'
import { useCart } from '../../context/cartContext'
import './index.scss'

export default function AddToCartButton(props) {
    const cart = useCart()

    const addToCart = () => {
        cart.addItem({ item: props.item, quantity: props.count })
    }

    return (
        <>
            <button id="addToCartButton" onClick={addToCart}>Add To Cart</button>
        </>
    )
}
