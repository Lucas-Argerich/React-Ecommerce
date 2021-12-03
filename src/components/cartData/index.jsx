import React from 'react'
import { useCart } from '../../context/cartContext'

export default function CartData() {
    return (
        <div>
            {useCart.cart}
        </div>
    )
}
