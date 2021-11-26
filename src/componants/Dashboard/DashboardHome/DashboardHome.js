import React, { useEffect, useState } from 'react';


const DashboardHome = () => {
    const [orders, setOrders] = useState([])
    const [services, setServices] = useState([])
    const [pricings, setPricings] = useState([])
    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/prices')
            .then(res => res.json())
            .then(data => setPricings(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])





    return (
        <div className="container mx-auto">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="shadow py-2  h-100">

                        <div className="card-body">
                            <i className="bi bi-bag-plus fs-1"></i>
                            <div className='d-flex justify-content-between'>
                                <h5 className="card-title">Total Orders</h5>
                                <h5 className="card-title">{orders.length}</h5>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="shadow py-2  h-100">

                        <div className="card-body">
                            <i className="bi bi-clipboard-plus fs-1"></i>
                            <div className='d-flex justify-content-between'>
                                <h5 className="card-title">Total Service</h5>
                                <h5 className="card-title">{services.length}</h5>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="shadow py-2  h-100">

                        <div className="card-body">
                            <i className="bi bi-activity fs-1"></i>
                            <div className='d-flex justify-content-between'>
                                <h5 className="card-title">Total Price Plan</h5>
                                <h5 className="card-title">{pricings.length}</h5>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="shadow py-2  h-100">
                        <div className="card-body">
                            <i className="bi bi-people fs-1"></i>
                            <div className='d-flex justify-content-between'>
                                <h5 className="card-title">Total Clients</h5>
                                <h5 className="card-title">{users.length}</h5>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="shadow py-2 h-100">

                        <div className="card-body">
                            <i className="bi bi-bank2 fs-1"></i>
                            <div className='d-flex justify-content-between'>
                                <h5 className="card-title">Total Revenue</h5>
                                <h5 className="card-title">5</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;