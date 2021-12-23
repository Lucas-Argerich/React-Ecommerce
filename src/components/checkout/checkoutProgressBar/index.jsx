import React from 'react'
import { ProgressBar, Step } from 'react-step-progress-bar'
import "./index.scss";

export default function CheckoutProgressBar(props) {

    let stepPercentage = 0

    if (props.currentStep === 1) {
        stepPercentage = 20
    } else if (props.currentStep === 2) {
        stepPercentage = 40
    } else if (props.currentStep === 3) {
        stepPercentage = 60
    } else if (props.currentStep === 4) {
        stepPercentage = 80
    } else {
        stepPercentage = 0;
    }

    const transitionStyles = {
        entered: { background: "#5ECE7B" },
        exited: { background: "#f1f2f3" }
    };

    return (
        <ProgressBar percent={stepPercentage} stepPositions={[20, 40, 60, 80]}>
            <Step>
                {({ accomplished, index, transitionState }) => (

                    <div className={`indexedStep ${accomplished ? "accomplished" : null} index${index + 1}`}
                        style={transitionStyles[transitionState]} />
                )}
            </Step>
            <Step>
                {({ accomplished, index, transitionState }) => (
                    <div className={`indexedStep ${accomplished ? "accomplished" : null} index${index + 1}`}
                        style={transitionStyles[transitionState]} />
                )}
            </Step>
            <Step>
                {({ accomplished, index, transitionState }) => (
                    <div className={`indexedStep ${accomplished ? "accomplished" : null} index${index + 1}`}
                        style={transitionStyles[transitionState]} />
                )}
            </Step>
            <Step>
                {({ accomplished, index, transitionState }) => (
                    <div className={`indexedStep ${accomplished ? "accomplished" : null} index${index + 1}`}
                        style={transitionStyles[transitionState]} />
                )}
            </Step>
        </ProgressBar>
    )
}
