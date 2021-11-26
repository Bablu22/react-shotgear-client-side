import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import google from '../../../images/google.png'
import useAuth from '../../../hooks/useAuth'
import Footer from '../../Shared/Footer/Footer';

const Register = () => {

    const [loginData, setLoginData] = useState({})
    const { registeruser, isLooding, error, googleLogIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)

    }

    const handleSubmit = e => {
        e.preventDefault()
        registeruser(loginData.email, loginData.password, loginData.name, location, navigate)

        setLoginData('')
        console.log('object', error);
    }
    const handlegoogleSignIn = () => {
        googleLogIn(location, navigate)
    }

    return (
        <div>
            <Navigation />

            <div className="container mx-auto py-5">
                {
                    isLooding && <div className="spinner-border w-full d-block mx-auto" role="status">
                        <div className="visually-hidden w-full mx-auto"></div>
                    </div>
                }

                {!isLooding && <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <h4 className='mb-3'>Register your account</h4>
                        {error && <div id="emailHelp" className="form-text text-danger fs-6">{error}</div>}
                        <div className="mb-3">
                            <label for="exampleInputName" className="form-label">Your Name</label>
                            <input
                                onChange={handleOnChange}
                                name="name"
                                type="text" className="form-control" id="exampleInputName" placeholder='Your Name' />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input
                                onChange={handleOnChange}
                                name="email"
                                type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email' />

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                onChange={handleOnChange}
                                name="password"
                                type="password" className="form-control" id="exampleInputPassword1" placeholder='Your Password' />
                        </div>

                        <button type="submit" className="btn  custom-btn">Create an account <i className="bi bi-box-arrow-in-right ms-1"></i></button>
                    </form>


                    <h6 className='text-center mt-4'>Already have an account? <Link to='/login'>Login</Link> </h6>
                    <div className="d-flex justify-content-center my-4">
                        <h6 className="google">or sign-in with</h6>
                    </div>
                    <button onClick={handlegoogleSignIn} className="google-btn">
                        <img width='40px' src={google} alt="" />
                        <h6 className='mt-2 ms-3'>Continue with Google</h6>
                    </button>
                </div>}
            </div>
            <Footer />
        </div>
    );
};

export default Register;