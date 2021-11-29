import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function ItemDetail() {
    const { productId } = useParams()
    const [item, setItem] = useState([])

    useEffect(() => {
        fetchItem()
    }, [productId])


    async function fetchItem() {
        setItem(await getItem())
    }

    const getItem = () => {
        return new Promise((resolve, reject) => {
            resolve(
                fetch(`https://fakestoreapi.com/products/${productId}`)
                    .then(res => (res.ok ? res : reject(res)))
                    .then(res => res.json())
            )
        })
    }



    return (
        <div className="itemDetailContainer">
            <div className="productGallery">
                <img src={item.image} style={{ width: "20%" }} />
            </div>
            <div className="productInfo">
                <h2>{item.title}</h2>
                <h3>${item.price}</h3>
                <p>{item.description}</p>
                <select>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
            </div>
        </div>
    )
}
