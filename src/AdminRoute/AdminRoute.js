import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';


const AdminRoute = ({ children }) => {

    const { user, admin, isLooding } = useAuth()
    let location = useLocation();

    if (isLooding) {
        return <>
            <div className="spinner-border w-full d-block mx-auto mt-5" role="status">
                <div className="visually-hidden w-full mx-auto"></div>
            </div>
        </>
    }


    if (user.email && admin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} />;

};

export default AdminRoute;
