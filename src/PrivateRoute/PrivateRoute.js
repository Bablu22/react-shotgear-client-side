import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, isLooding } = useAuth()
    let location = useLocation();
    if (isLooding) {
        return <div className="spinner-border w-full d-block mx-auto mt-5" role="status">
            <div className="visually-hidden w-full mx-auto"></div>
        </div>
    }


    if (user.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />;

};

export default PrivateRoute;