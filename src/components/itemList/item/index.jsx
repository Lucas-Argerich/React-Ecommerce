import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export default function Item(props) {
    return (
        <Link to={`React-Ecommerce/product/${props.id}`}>
            <div className="itemContainer">
            <div className="imageContainer">
                <img src={props.image} />
            </div>
            <div className="itemContainerBottom">
                <h3>{props.title}</h3>
                <h4>${props.price}</h4>
            </div>
        </div>
        </Link>
    )
}

