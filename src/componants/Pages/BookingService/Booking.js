import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Booking.css'

const Booking = () => {
    const { bookingId } = useParams()
    const [pricing, setPricing] = useState({})
    const { user } = useAuth()
    const navigate = useNavigate()
    const totalPrice = pricing.price + pricing.vat

    useEffect(() => {
        fetch(`http://localhost:5000/prices/${bookingId}`)
            .then(res => res.json())
            .then(data => setPricing(data))
    }, [bookingId])

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onChange" });
    const onSubmit = data => {
        data.price = totalPrice
        data.itemName = pricing.name
        console.log(data)


        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {


                    paymentPage()
                    reset()
                }
            })
    };


    const paymentPage = () => {
        navigate(`/payment/${bookingId}`)
    }

    return (
        <>
            <Navigation />
            <div className="container d-lg-flex justify-content-center mx-auto py-5 my-5">
                <div className="box-1 bg-light user">

                    <div className="box-inner-1 pb-3 mb-3 ">
                        <div className="d-flex justify-content-between mb-3 userdetails">
                            <p className="fw-bold fs-3">{pricing.name}</p>
                            <p className="fw-bold fs-3">${pricing.price}.00</p>

                        </div>
                        <p className="dis my-3 info">{pricing.description}</p>
                        <p className="dis mb-3 updates">Free updates forever</p>
                        <p className="dis mb-3 different">Three different colored sets:</p>
                        <div className="dis">
                            <p className="black"><span className="fas fa-arrow-right mb-3 pe-2"></span>Black</p>
                            <p className="white"><span className="fas fa-arrow-right mb-3 pe-2"></span>White</p>
                            <p className="pastel"><span className="fas fa-arrow-right mb-3 pe-2"></span>Pastel</p>
                        </div>
                        <div>
                            <p className="dis footer my-3">Here is a quick guide on how to apply them</p>
                        </div>
                    </div>
                </div>
                <div className="box-2">
                    <div className="box-inner-2">
                        <div>
                            <p className="fw-bold">Payment Details</p>
                            <p className="dis mb-3">Complete your purchase by providing your payment details</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}  >
                            <div className="mb-3">
                                <p className="dis fw-bold mb-2">Name</p>
                                <input
                                    placeholder="Name"
                                    defaultValue={user.displayName}
                                    {...register("name")}
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <p className="dis fw-bold mb-2">Email address</p>
                                <input
                                    placeholder="Email"
                                    defaultValue={user.email}
                                    {...register("email")}
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <p className="dis fw-bold mb-2">Date</p>
                                <input
                                    type="date"
                                    {...register("date")}
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <p className="dis fw-bold mb-2">Phone</p>
                                <input
                                    placeholder="Phone"

                                    {...register("phone")}
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <p className="dis fw-bold mb-2">Address</p>
                                <input
                                    placeholder="Address"

                                    {...register("address")}
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div>

                                <div className="address">
                                    <div className="d-flex flex-column dis">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <p>Subtotal</p>
                                            <p className='fs-5'>
                                                $<span>{pricing.price}.00</span>
                                            </p>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <p>VAT<span>(20%)</span></p>
                                            <p className='fs-5'>
                                                $<span>{pricing.vat}.00</span>
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <p className="fw-bold">Total</p>
                                            <p className='fs-5'>
                                                $<span>{totalPrice}.00</span>
                                            </p>
                                        </div>

                                        <button
                                            type='submit'
                                            className="btn btn-primary mt-2">Proceed to Payment

                                        </button>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Booking;
