import React from 'react'
import CartList from '../../cart/cartList';

export default function Review(props) {

    if (props.currentStep !== 4) {
        return null;
    }

    return (
        <>
            <h2 className="checkoutTitle">4. Review</h2>
            <CartList currentStep={props.currentStep} />
        </>
    )
}
