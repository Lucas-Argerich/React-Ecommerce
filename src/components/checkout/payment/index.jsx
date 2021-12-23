import React, { useEffect, useState } from 'react'

export default function Payment(props) {

    if (props.currentStep !== 3) {
        return null;
    }

    const [checkbox, setCheckbox] = useState(false)
    function handleChecked() {
        setCheckbox(!checkbox)
    }

    return (
        <>
            <h2 className="checkoutTitle">3. Payment</h2>
            <div className="checkboxContainer">
                <input type="checkbox" id="sameAsShipping"
                    onChange={handleChecked}
                />
                <label htmlFor="sameAsShipping">Same as shipping</label>
            </div>
            <div>
                <input type="text" id="formPaymentFirstName" placeholder="First Name" name="paymentFirstName"
                    value={checkbox ? props.state["firstName"] : null}
                    onChange={props.handleChange}
                />
                <input type="text" id="formPaymentLastName" placeholder="Last Name" name="paymentLastName"
                    value={checkbox ? props.state["lastName"] : null}
                    onChange={props.handleChange}
                />
            </div>
            <input type="text" id="formPaymentStreetName" placeholder="Street Name" name="paymentStreetName"
                value={checkbox ? props.state["streetAddress"].split(" ").splice(0, props.state["streetAddress"].split(" ").length - 1).join(" ") : null}
                onChange={props.handleChange}
            />
            <input type="number" id="formPaymentAddressNumber" placeholder="House / Apartment Number" name="paymentAddressNumber"
                value={checkbox ? props.state["streetAddress"].split(" ").pop() : null}
                onChange={props.handleChange}
            />
            <div>
                <input type="text" id="formPaymentCity" placeholder="City" name="paymentCity"
                    value={checkbox ? props.state["city"] : null}
                    onChange={props.handleChange}
                />
                <input type="text" id="formPaymentStateProvince" placeholder="State/Province" name="PaymentStateProvince"
                    value={checkbox ? props.state["stateProvince"] : null}
                    onChange={props.handleChange}
                />
            </div>
            <div>
                <input type="text" id="formPaymentZipCode" placeholder="Zip-code" name="paymentZipCode"
                    value={checkbox ? props.state["zipCode"] : null}
                    onChange={props.handleChange}
                />
                <input type="text" id="formPaymentCountry" placeholder="Country" name="paymentCountry"
                    value={checkbox ? props.state["country"] : null}
                    onChange={props.handleChange}
                />
            </div>
            <input type="tel" id="formPaymentPhone" placeholder="Phone number" name="paymentPhone"
                value={checkbox ? props.state["phone"] : null}
                onChange={props.handleChange}
            />
            <h4>Payment Method</h4>
            <input type="tel" id="ccn formCardNumber" inputMode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxLength={19} placeholder="Card Number" name="cardNumber"
                onChange={props.handleChange}
            />
            <div>
                <input type="date" id="formCardExpirationDate" placeholder="Expiration date" name="cardExpirationDate"
                    onChange={props.handleChange}
                />
                <input type="number" id="formCardSecurityCode" maxLength={4} placeholder="Security Code" name="cardSecurityCode"
                    onChange={props.handleChange}
                />
            </div>
        </>
    )
}
