import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services'

const Services = () => {
    const [services, setServices] = useState([])
    const [isLooding, setIsLooding] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsLooding(false)

            })
    }, [])

    return (
        <div className='service'>
            <div className='container mx-auto'>
                <div className='heading'>
                    <p>Our Service</p>
                    <h3>What We Offer</h3>
                </div>
                {
                    isLooding && <div className="spinner-border w-full d-block mx-auto mt-5" role="status">
                        <div className="visually-hidden w-full mx-auto"></div>
                    </div>
                }
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;