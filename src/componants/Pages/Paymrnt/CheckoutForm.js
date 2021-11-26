import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import image from '../../../images/stripe.png'

const CheckoutForm = ({ order }) => {
    const [error, setError] = useState('')
    const { price, name, _id } = order;
    const { user } = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const [proccess, setProccess] = useState(false)
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState("");






    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch("http://localhost:5000/create-payment-intent", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ price }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setClientSecret(data.clientSecret));
    // }, [price]);


    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }
        setProccess(true)
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
        } else {
            setError('')
            console.log('[PaymentMethod]', paymentMethod);
        }

        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
            setSuccess('')
        }
        else {
            setError('')
            setSuccess('Your Payment success')
            // save to database
            const payment = {
                amount: paymentIntent.amount,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `http://localhost:5000/orders/${user.email}/${_id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }


    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <img src={image} alt="" />
                <h4 className="my-4">Payment for {order.itemName}</h4>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {proccess ? <div className="spinner-border w-full d-block mx-auto mt-5" role="status">

                    <div className="visually-hidden w-full mx-auto">

                    </div>
                </div> :
                    <button type="submit" disabled>
                        Pay ${price}
                    </button>}
                <p className='text-danger'>{error}</p>
            </form>
        </div>
    );
};

export default CheckoutForm;