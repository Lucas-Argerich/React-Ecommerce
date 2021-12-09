import React, { useEffect } from 'react'
import { BiTrash } from 'react-icons/bi'
import ItemCount from '../itemCount'
import { useCart } from '../../context/cartContext'
import './index.scss'

export default function CartListItem(props) {

    const { deleteItem } = useCart()

    return (
        <div className="cartListItem">
            <div className="itemImageContainer">
                <img src={props.image} />
                <ItemCount id={props.id} quantity={props.quantity} />
            </div>
            <div className="itemContent">
                <div className="itemContentHeader"><h4>{props.title}</h4><button onClick={() => deleteItem(props.id)}><BiTrash /></button></div>
                <div className="itemContentData"><h5>${props.price}</h5></div>
            </div>
        </div>
    )
}