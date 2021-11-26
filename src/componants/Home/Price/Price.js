import React from 'react';
import { Link } from 'react-router-dom';

const Price = ({ priching }) => {

    const { name, title, price, description, _id } = priching

    return (
        <div className="col">
            <div className="card h-100 py-4 border-0 text-center">
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{title}</p>
                    <h1 className="card-title" style={{ fontSize: '60px', }}>${price}.00</h1>
                </div>
                <div className="card-footer border-0 m-4 " style={{ fontFamily: 'Roboto', textAlign: 'justify' }}>
                    <small className="text-muted lh-base">{description}</small>
                </div>
                <Link to={`/booking/${_id}`}>
                    <button className='all-btn btn w-50 mx-auto'>BOOK NOW</button>
                </Link>
            </div>
        </div >
    );
};

export default Price;