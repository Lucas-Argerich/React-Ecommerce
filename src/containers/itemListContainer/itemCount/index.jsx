import React, { useState } from 'react'
import './index.scss'

function ItemCount({ stock, initial, onAdd }) {
    stock = 7
    initial = 1
    const [count, setCount] = useState(initial)

    return (
        <div className="itemBox">
            <h3 className="itemBoxTitle">Item a Comprar</h3>
            <h4 className="itemBoxCount">{count}</h4>
            <form>
                <div className="formTop">
                    <input type="button" className="itemBoxButton" itemID="subtractButton" value="-" onClick={() => { if (count > initial) { setCount(count - 1) } }}></input>
                    <input type="button" className="itemBoxButton" itemID="addButton" value="+" onClick={() => { if (count < stock) { setCount(count + 1) } }}></input>
                </div>
                <input type="button" className="itemBoxAddToCart" itemID="itemBoxAddToCart" value="Add To Cart" onClick={() => { onAdd = count }}></input>
            </form>
        </div>
    )
}

export default ItemCount
