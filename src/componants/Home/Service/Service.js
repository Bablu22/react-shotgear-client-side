import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description } = service
    return (
        <div className="col">
            <div className="card h-100 p-3  border-0">
                <div className='d-flex justify-content-between align-items-center p-2 '>
                    <img src={`data:image/jpeg;base64,${img}`} className="img-fluid" width='40px' alt="..." />
                    <h5 className="card-title">{name}</h5>
                </div>

                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;