"use client"
import React, { useEffect } from 'react';


const RazorpayButton = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.setAttribute('data-payment_button_id', 'pl_NxzvdFL2V71IEK');
        script.async = true;

        const formElement = document.getElementById('razorpay-form');
        if (formElement) {
            formElement.appendChild(script);
        } else {
            console.error('Form element with id "razorpay-form" not found.');
        }

        return () => {
            if (formElement && formElement.contains(script)) {
                formElement.removeChild(script);
            }
        };
    }, []);

    return (
        <form id="razorpay-form">
        
        </form>
    );
};

export default RazorpayButton;


{/* <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_NxzvdFL2V71IEK" async> </script> </form> */}