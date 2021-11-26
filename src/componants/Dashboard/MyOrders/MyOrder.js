import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({ order }) => {
    const { name, itemName, title, price, phone, email, address, _id } = order

    return (
        <>
            <div className="col">
                <div className="card py-4 border-0 text-center">
                    <div className="card-body">
                        <h3 className="card-title">{itemName}</h3>
                        <p className="card-text">{title}</p>
                        <h1 className="card-title" style={{ fontSize: '60px', }}>${price}.00</h1>
                    </div>
                    <div className="card-footer border-0 m-4 " style={{ fontFamily: 'Roboto', textAlign: 'left' }}>
                        <small className="text-muted lh-base"> Name: {name}</small><br />
                        <small className="text-muted lh-base"> Phone: {phone}</small><br />
                        <small className="text-muted lh-base">Email: {email}</small><br />
                        <small className="text-muted lh-base">Address: {address}</small><br />
                    </div>
                    <Link to={`/payment/${_id}`}>
                        <button className='all-btn btn  mx-auto'>Pay ${price}</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MyOrder;