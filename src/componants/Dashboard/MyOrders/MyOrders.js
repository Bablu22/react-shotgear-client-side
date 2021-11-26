import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    return (
        <div>


            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    orders.map(order => <MyOrder
                        key={order.name}
                        order={order}
                    ></MyOrder>)
                }

            </div>
        </div>
    );
};

export default MyOrders;