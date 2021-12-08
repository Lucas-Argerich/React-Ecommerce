import React from 'react'
import {BiTrash} from 'react-icons/bi'
import './index.scss'

export default function CartListItem(props) {
    return (
        <div className="cartListItem">
            <div className="itemImageContainer"><img src={props.image}/></div>
            <div className="itemContent">
                <div className="itemContentHeader"><h4>{props.title}</h4><button><BiTrash /></button></div>
                <div className="itemContentData"><h5>${props.price}</h5></div>
            </div>
        </div>
    )
}
