import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ReactLoading from 'react-loading';
import ItemCount from '../itemCount';
import { BsChevronDown } from 'react-icons/bs'
import './index.scss'

export default function ItemDetail() {
    const { productId } = useParams()
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchItem()
    }, [productId])


    async function fetchItem() {
        setItem(await getItem())
        setLoading(false)
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
        loading ?
            <ReactLoading className="bubbleLoader" type={"bubbles"} color={"var(--c-primary)"} height={'15%'} width={'15%'} /> :
            <div className="itemDetailContainer">
                <div className="productGallery">
                    <img src={item.image} />
                </div>
                <div className="product">
                    <div className="productInfo">
                        <h2>{item.title}</h2>
                        <div className="productPriceRateInline">
                            <h3>${item.price}</h3>
                            {/* {item.rating} */}
                        </div>
                        <p>{item.description}</p>
                    </div>
                    <div className="productCartData">
                        <div className="selectContainer">
                            <select>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                            <BsChevronDown className="selectExpandIcon" />
                        </div>
                        <ItemCount />
                    </div>
                </div>
            </div>

    )
}
