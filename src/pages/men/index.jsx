import React, { Component } from 'react'
import ItemList from '../../components/item/itemList'

export default class Men extends Component {
    render() {
        return (
            <main>
                <ItemList title="Bestsellers" category="men's clothing" />
            </main>
        )
    }
}