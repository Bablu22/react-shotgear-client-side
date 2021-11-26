import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const AddReview = () => {


    const { register, handleSubmit, reset, } = useForm({ mode: "onChange" });
    const onSubmit = data => {

        console.log(data)

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Submit success',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    reset()
                }
            })
    };


    return (
        <div className='container mx-auto px-md-5 px-0'>

            <div className="shadow p-3 p-md-5">
                <h2>Give your Feedback</h2>
                <form onSubmit={handleSubmit(onSubmit)}  >
                    <div className="mb-3">
                        <p className="dis fw-bold mb-2">Name</p>
                        <input
                            placeholder="Name"
                            {...register("name")}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <p className="dis fw-bold mb-2">Title</p>
                        <input
                            placeholder="Title"
                            {...register("title")}
                            required
                            className="form-control"
                        />
                    </div>


                    <div className="mb-3">
                        <p className="dis fw-bold mb-2">Address</p>
                        <textarea
                            placeholder="Description"

                            {...register("description")}
                            required
                            className="form-control"
                        />
                    </div>
                    <button
                        type='submit'
                        className="btn all-btn  mx-0 mt-2">
                        Submit
                    </button>
                </form>

            </div>
        </div>
    );
};

export default AddReview;