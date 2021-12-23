import React, { useState, useEffect } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useCart } from '../../../context/cartContext'
import AddToCartButton from '../../cart/addToCartButton'
import './index.scss'

export default function ItemCount(props) {

    const [itemCount, setItemCount] = useState(1)
    const cart = useCart()

    function onAdd() {
        setItemCount(itemCount + 1)
    }
    function onSubtract() {
        if (itemCount > 1) {
            setItemCount(itemCount - 1)
        }
    }

    return (
        <div className="itemCountContainer" style={{ transform: `scale(${props.scale})` }}>
            <div className="itemCount">
                <button onClick={onSubtract}><AiOutlineMinus /></button>
                <span>{itemCount}</span>
                <button onClick={onAdd}><AiOutlinePlus /></button>
            </div>
            <div className="itemCountAddCart">
                <Link to="React-Ecommerce/cart">
                    <AddToCartButton item={props.item} count={itemCount} />
                </Link>
            </div>
        </div>
    )
}