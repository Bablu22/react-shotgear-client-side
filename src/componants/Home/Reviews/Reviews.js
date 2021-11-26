import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Review from './Review';
import image from '../../../images/work/rewiew.webp'

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className='container mx-auto p-4 mb-5'>
            <div className='heading'>
                <p>Testimonial</p>
                <h3>What Client Say</h3>
            </div>
            <div className="row d-flex align-items-center justify-content-between">
                <div className="col-md-6 p-5 ">
                    <img src={image} width="100%" className=' img-fluid' alt="" />
                </div>
                <div className="col-md-6">
                    <h3 className='fs-1 py-3'>With efficiency to unlock more opportunities</h3>
                    <Slider {...settings}>
                        {
                            reviews.map(review => <Review
                                key={review.name}
                                review={review}
                            ></Review>)
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Reviews;