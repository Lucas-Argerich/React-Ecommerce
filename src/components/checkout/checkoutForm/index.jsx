import React, { Component } from 'react'
import CheckoutProgressBar from '../checkoutProgressBar'
import Details from '../details'
import Payment from '../payment'
import Shipping from '../shipping'
import Review from '../review'
import './index.scss'
import CheckoutList from '../checkoutList'

export default class CheckoutForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            streetAddress: "",
            city: "",
            stateProvince: "",
            zipCode: "",
            country: "",
            shippingMethod: "",
            paymentFirstName: "",
            paymentLastName: "",
            paymentStreetName: "",
            paymentAddressNumber: "",
            paymentCity: "",
            paymentStateProvince: "",
            paymentZipCode: "",
            paymentCountry: "",
            paymentPhone: "",
            cardNumber: "",
            cardExpirationDate: "",
            cardSecurityCode: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    handleSubmit(event) {
        event.preventDefault()
        const data = this.state
        console.log(data)
    }

    _next() {
        let currentStep = this.state.currentStep;
        currentStep = currentStep >= 3 ? 4 : currentStep + 1;
        this.setState({
            currentStep: currentStep
        });
    }

    _prev() {
        let currentStep = this.state.currentStep;
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
            currentStep: currentStep
        });
    }

    get previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <button className="prevButton" onClick={this._prev}>
                    {currentStep === 4 ? "edit payment" : "edit details"}

                </button>
            );
        }
        return null;
    }

    get nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 4 && currentStep > 1) {
            return (
                <button className="nextButton" onClick={this._next}>
                    {currentStep === 2 ? "continue to payment" : "continue"}
                </button>
            );
        }
        return null;
    }

    get submitButton() {
        let currentStep = this.state.currentStep;
        if (currentStep > 3) {
            return <button className="submitButton">Confirm Order</button>;
        }
        return null;
    }

    render() {
        return (
            <div className="checkoutContainer">
                <div className="checkout">
                    <CheckoutProgressBar currentStep={this.state.currentStep} />
                    <Details
                        currentStep={this.state.currentStep}
                        next={this._next}
                    />
                    <form onSubmit={this.handleSubmit}>
                        <Shipping
                            currentStep={this.state.currentStep}
                            state={this.state}
                            handleChange={this.handleChange}
                        />
                        <Payment
                            currentStep={this.state.currentStep}
                            state={this.state}
                            handleChange={this.handleChange}
                        />
                        <Review
                            currentStep={this.state.currentStep}
                        />
                    </form>
                    <div className="buttonsContainer">
                        {this.nextButton}
                        {this.submitButton}
                        {this.previousButton}
                    </div>
                </div>
                <CheckoutList />
            </div>
        )
    }
}
