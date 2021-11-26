import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="top-banner">
            <div className=' banner-text'>
                <h5>MODEL PHOTOGRAPHY</h5>
                <h1>CREATIVE <span className='banner-span'>STUDIO</span></h1>
                <p>Capturing moments from today</p>
                <div className="banner-btn">
                    <a href="/">VIEW WORK</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;