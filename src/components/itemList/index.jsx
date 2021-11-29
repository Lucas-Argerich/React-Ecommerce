import React, { useState, useEffect } from 'react'
import Item from './item'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './index.scss'

export default function ItemList(props) {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1700 },
            items: 4,
            slidesToSlide: 4
        },
        tablet: {
            breakpoint: { max: 1700, min: 464 },
            items: 3,
            slidesToSlide: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1
        }
    }

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        setData(await getData())
    }

    const getData = () => {
        return new Promise((resolve, reject) => {
            resolve(
                fetch("https://fakestoreapi.com/products/category/men's%20clothing")
                    .then(res => (res.ok ? res : reject(res)))
                    .then(res => res.json())
            )
        })
    }

    return (
        <div className="itemListContainer">
            <h2 className="itemListTitle">{props.title}</h2>
            <Carousel className="itemList"
                itemClass="carouselListItem"
                responsive={responsive}
                centerMode={false}
                infinite={true} >
                {data.map(i => <Item key={i.id} id={i.id} title={i.title} price={i.price} image={i.image} rating={i.rating} category={i.category} description={i.description} />)}
            </Carousel>
        </div>
    )
}
