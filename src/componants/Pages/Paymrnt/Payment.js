import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import './Payment.css'

const stripePromise = loadStripe('pk_test_51JzKxZFxi6g9lVqXk8ez3yBcTUt6j6SRciPuJKmCaQHNJYRY0XeHlTbRQvs1UJaEa1VccnqUcNWcScp3Vw6kpFUb00sSqK7JBR');


const Payment = () => {
    const { paymentId } = useParams()
    const { user } = useAuth()
    const [order, setOrder] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}/${paymentId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [paymentId, user.email])

    return (
        <>
            <Navigation />
            <div className='container mx-auto my-5'>
                <div className="shadow py-1 rounded-lg">


                    {order?.price &&
                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                order={order}
                            />
                        </Elements>}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Payment;