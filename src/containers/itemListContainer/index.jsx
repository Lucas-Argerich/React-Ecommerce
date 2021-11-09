import React, { Component } from 'react'
import Greeting from './greeting'
import ItemCount from './itemCount'
import './index.scss'

export class ItemListContainer extends Component {
    render() {
        return (
            <main>
                <Greeting/>
                <ItemCount/>
            </main>
        )
    }
}

export default ItemListContainer
