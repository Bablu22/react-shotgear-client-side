import React, { useState } from 'react';
import Swal from 'sweetalert2';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleBlur = e => {
        setEmail(e.target.value)
    }

    const hnadleAdminSubmit = e => {
        e.preventDefault()
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {

                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Make Admin success',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }

            })

    }
    return (
        <div className='container mx-auto'>
            <div className='shadow p-5'>
                <h5>Enter an email address to make an Admin</h5>
                <div className="mb-3 mt-5">
                    <p className="dis fw-bold mb-2">Enter Email</p>
                    <input
                        onBlur={handleBlur}
                        placeholder="Email"
                        type='email'
                        required
                        className="form-control w-50"
                    />
                </div>
                <button
                    onClick={hnadleAdminSubmit}
                    className='btn all-btn'>Make Admin</button>
            </div>
        </div>
    );
};

export default MakeAdmin;