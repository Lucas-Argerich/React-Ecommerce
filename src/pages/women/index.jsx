import React, { Component } from 'react'
import ItemList from '../../components/itemList'

export default class Women extends Component {
    render() {
        return (
            <main>
                <ItemList title="Bestsellers" category="women's clothing" />
            </main>
        )
    }
}