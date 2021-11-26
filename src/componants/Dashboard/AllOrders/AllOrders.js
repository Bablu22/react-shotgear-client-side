import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AllOrder from './AllOrder';
import './AllOrders.css'
const AllOrders = () => {

    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    const handleDelete = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {

                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You wan't to delete this!",
                        icon: 'warning',
                        confirmButtonColor: '#eb4d4b',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = orders.filter(i => i._id !== id)
                            setOrders(remaining)
                        }
                    })

                }
            })
    }


    return (
        <div>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>

                            <th scope="col">Client Info</th>
                            <th scope="col">Service Name</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            orders.map(order => <AllOrder
                                key={order._id}
                                order={order}
                                deleteButton={handleDelete}
                            ></AllOrder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;