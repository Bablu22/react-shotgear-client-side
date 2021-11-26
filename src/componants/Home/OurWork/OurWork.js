import React from 'react';
import image1 from '../../../images/work/image1.webp'
import image2 from '../../../images/work/image2.webp'
import image3 from '../../../images/work/image3.webp'
import image4 from '../../../images/work/image4.webp'
import image5 from '../../../images/work/image5.webp'
import image6 from '../../../images/work/image6.webp'
import './OurWork.css'

const OurWork = () => {
    return (
        <div className="our-work p-3 my-5">
            <div className='heading my-5'>
                <p>Our Portfolio</p>
                <h3>Check Our Work</h3>
            </div>
            <div className="row">
                <div className="col-md-3 p-0 work ">

                    <img src={image1} alt="" />

                    <div className='work-desc'>
                        <div>
                            <p>Fashion photography</p>
                            <h3>Smiling beutiful women</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 p-0 work">
                    <img src={image2} alt="" />
                    <div className='work-desc'>
                        <div>
                            <p>Fashion photography</p>
                            <h3>Smiling beutiful women</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-0 work">
                    <img src={image3} alt="" />
                    <div className='work-desc'>
                        <div>
                            <p>Fashion photography</p>
                            <h3>Smiling beutiful women</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 p-0 work">
                    <img src={image4} alt="" />
                    <div className='work-desc'>
                        <div>
                            <p>Fashion photography</p>
                            <h3>Smiling beutiful women</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-0 work">
                    <img src={image5} alt="" />
                    <div className='work-desc'>
                        <div>
                            <p>Fashion photography</p>
                            <h3>Smiling beutiful women</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 p-0 work">
                    <img src={image6} alt="" />
                    <div className='work-desc'>
                        <div>
                            <p>Fashion photography</p>
                            <h3>Smiling beutiful women</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OurWork;