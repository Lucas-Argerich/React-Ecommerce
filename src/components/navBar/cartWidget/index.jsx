import { ShoppingCart } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Component } from 'react'


export default class CartWidget extends Component {
    render() {
        return (
            <IconButton
                size="large"
                color="inherit">
                <ShoppingCart />
            </IconButton>
        )
    }
}
