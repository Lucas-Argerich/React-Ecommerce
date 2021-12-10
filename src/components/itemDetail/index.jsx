import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ReactLoading from 'react-loading';
import ItemCountWithAdd from '../itemCountWithAdd';
import { BsChevronDown } from 'react-icons/bs'
import { db } from '../../firebase'
import { collection, getDocs } from "firebase/firestore";
import './index.scss'

export default function ItemDetail() {

    const { productId } = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchItem()
    }, [productId])

    async function fetchItem() {
        let querySnapshot = await getDocs(collection(db, "items"))
        let itemGet = []
        querySnapshot.forEach((doc) => {
            itemGet.push(doc.data())
        })
        itemGet = itemGet.find(i => i.id === productId)
        console.log(itemGet)
        setItem(itemGet)
        setLoading(false)
    }

    return (
        loading ? <ReactLoading className="bubbleLoader" type={"bubbles"} color={"var(--c-primary)"} height={'15%'} width={'15%'} /> :
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
                        <ItemCountWithAdd item={item} />
                    </div>
                </div>
            </div>
    )
}