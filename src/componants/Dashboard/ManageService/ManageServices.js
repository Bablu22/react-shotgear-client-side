import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import ManageService from './ManageService';

const ManageServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)


            })
    }, [])


    const handleDelete = id => {
        fetch(`http://localhost:5000/services/${id}`, {
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
                            const remaining = services.filter(i => i._id !== id)
                            setServices(remaining)
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

                            <th scope="col">Service Name</th>

                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            services.map(service => <ManageService
                                key={service._id}
                                service={service}
                                deleteButton={handleDelete}
                            ></ManageService>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageServices;