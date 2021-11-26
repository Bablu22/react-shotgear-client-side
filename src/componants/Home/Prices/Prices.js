import React, { useEffect, useState } from 'react';
import Price from '../Price/Price';

const Prices = () => {
    const [prices, setPrices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/prices')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])


    return (
        <div>
            <div className="container mx-auto my-5 py-5">
                <div className='heading'>
                    <p>Pricing Plan</p>
                    <h3>Choose Your Packager</h3>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        prices.map(price => <Price
                            key={price.name}
                            priching={price}
                        ></Price>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Prices;