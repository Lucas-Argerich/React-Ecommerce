import React from 'react'

export default function Shipping(props) {

    if (props.currentStep !== 2) {
        return null;
    }

    return (
        <>
            <h2 className="checkoutTitle">2. Shipping</h2>
            <div>
                <input type="text" id="formFirstName" placeholder="First Name" name="firstName" value={props.state.firstName} onChange={props.handleChange} />
                <input type="text" id="formLastName" placeholder="Last Name" name="lastName" value={props.state.lastName} onChange={props.handleChange} />
            </div>
            <input type="email" id="formEmail" placeholder="Email address" name="email" value={props.state.email} onChange={props.handleChange} />
            <input type="tel" id="formPhone" placeholder="Phone number" name="phone" value={props.state.phone} onChange={props.handleChange} />
            <input type="text" id="formAddress" placeholder="Street address" name="streetAddress" value={props.state.streetAddress} onChange={props.handleChange} />
            <div>
                <input type="text" id="formCity" placeholder="City" name="city" value={props.state.city} onChange={props.handleChange} />
                <input type="text" id="formStateProvince" placeholder="State/Province" name="stateProvince" value={props.state.stateProvince} onChange={props.handleChange} />
            </div>
            <div>
                <input type="text" id="formZipCode" placeholder="Zip-code" name="zipCode" value={props.state.zipCode} onChange={props.handleChange} />
                <input type="text" id="formCountry" placeholder="Country" name="country" value={props.state.country} onChange={props.handleChange} />
            </div>
            <div className="formRadioInputs">
                <h4>Shipping method</h4>
                <div className="radioContainer">
                    <input type="radio" name="shippingMethod" id="shippingStandard" checked={props.state.shippingMethod === "standard"} value="standard" onChange={props.handleChange} />
                    <label htmlFor="shippingStandard">Standard</label>
                </div>
                <div className="radioContainer">
                    <input type="radio" name="shippingMethod" id="shippingSecondDay" checked={props.state.shippingMethod === "secondDay"} value="secondDay" onChange={props.handleChange} />
                    <label htmlFor="shippingSecondDay">Second Day</label>
                </div>
                <div className="radioContainer">
                    <input type="radio" name="shippingMethod" id="shippingNextDayStandard" checked={props.state.shippingMethod === "nextDayStandard"} value="nextDayStandard" onChange={props.handleChange} />
                    <label htmlFor="shippingNextDayStandard">Next Day Standard</label>
                </div>
            </div>
        </>
    )
}
