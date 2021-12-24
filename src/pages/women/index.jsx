import React, { Component } from 'react'
import ItemList from '../../components/item/itemList'

export default class Women extends Component {
    render() {
        return (
            <main>
                <svg style={{position: "absolute", zIndex: -1, left: 0}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#9EE2B050" fill-opacity="1" d="M0,160L80,138.7C160,117,320,75,480,80C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
                <ItemList title="Merchstore for Women" category="women's clothing" />
            </main>
        )
    }
}