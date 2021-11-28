import React from 'react'
import './index.scss'

export default function Item(props) {
    return (
        <div className="itemContainer">
            <div className="imageContainer">
                <img src={props.image} />
            </div>
            <div className="itemContainerBottom">
                <h3>{props.title}</h3>
                <h4>${props.price}</h4>
            </div>
        </div>
    )
}

