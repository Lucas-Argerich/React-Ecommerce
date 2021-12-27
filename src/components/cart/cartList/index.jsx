import React from 'react'
import { useCart } from '../../../context/cartContext'
import CartListItem from '../cartListItem'
import './index.scss'

export default function CartList(props) {

    const { cart } = useCart()
    
    return (
        <div className="cartList">
            <h2>{props.title}</h2>
            {
                cart.addedItems.length > 0 ?

                    cart.addedItems.map(i =>
                        <CartListItem key={i.item.id} currentStep={props.currentStep} id={i.item.id} title={i.item.title} price={i.item.price} image={i.item.image} quantity={i.quantity}></CartListItem>
                    )
                    :
                    <h3>Feel free to add items to your cart!</h3>
            }
        </div>

    )
}
