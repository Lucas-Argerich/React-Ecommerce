import React from 'react'
import { BiTrash } from 'react-icons/bi'
import ItemCount from '../../item/itemCount'
import { useCart } from '../../../context/cartContext'

export default function CartListItem(props) {

    const { deleteItem } = useCart()

    return (
        <div className="cartListItem">
            <div className="itemImageContainer">
                <img src={props.image} />
                {props.currentStep != 4 && <ItemCount id={props.id} quantity={props.quantity} />}
            </div>
            <div className="itemContent">
                <div className="itemContentHeader"><h4>{props.title}</h4>{props.currentStep != 4 && <button onClick={() => deleteItem(props.id)}><BiTrash /></button>}</div>
                <div className="itemContentData"><h5>${props.price}</h5></div>
            </div>  
        </div>
    )
}