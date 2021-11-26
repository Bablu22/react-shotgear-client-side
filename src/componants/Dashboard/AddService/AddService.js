import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddService = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)


    const hnadleAddService = e => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('name', name)
        formData.append('description', description)
        formData.append('image', image)

        fetch('http://localhost:5000/services', {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Add service success',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }

            })

    }







    return (
        <div className='container mx-auto shadow p-5'>
            <h5>Add Service</h5>
            <hr />
            <form onSubmit={hnadleAddService}>
                <div className="mb-3 mt-5">
                    <p className="dis fw-bold mb-2">Enter Service Name</p>
                    <input
                        onChange={e => setName(e.target.value)}
                        placeholder="Name"
                        type='text'
                        required
                        className="form-control w-50"
                    />
                </div>
                <div className="mb-3 ">
                    <p className="dis fw-bold mb-2">Enter Service Desccription</p>
                    <textarea
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Description"
                        type='text'
                        required
                        className="form-control w-50"
                    />
                </div>
                <div className="mb-3 ">
                    <p className="dis fw-bold mb-2">Enter Service Desccription</p>
                    <input
                        onChange={e => setImage(e.target.files[0])}
                        type='file'
                        required
                        className="form-control w-50"
                    />
                </div>
                <button
                    type='submit'
                    // onClick={hnadleAdminSubmit}
                    className='btn all-btn'>Add Service</button>

            </form>
        </div>
    );
};

export default AddService;