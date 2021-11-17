import React, { Component } from 'react'
import ItemList from './itemList'
import './index.scss'

export class ItemListContainer extends Component {
    render() {
        return (
            <main>
                <ItemList />
            </main>
        )
    }
}

export default ItemListContainer
