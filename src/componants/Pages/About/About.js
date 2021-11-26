import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './About.css'
import ring from '../../../images/ring.png'
import leaves from '../../../images/leaves.png'
import image1 from '../../../images/work/about1.webp'
import image2 from '../../../images/work/about2.webp'

const About = () => {
    return (
        <>
            <Navigation />
            <div className='container mx-auto py-5 my-5'>
                <div className='heading'>
                    <p>About Us</p>
                    <h3>What Our Latest Work</h3>
                </div>
                <div className='row p-3'>
                    <div className='col-md-5 '>
                        <div className='card-bg mb-5  w-100 '>
                            <img width="100px" src={ring} alt="" />
                            <h4>WEDDING PHOTOGRAPHY</h4>
                            <p>World the end of summer the sweltering heat makes human sweat in the night and man plants and trees wilt even</p>
                        </div>
                        <div>
                            <img className="w-100  img-fluid d-block" src={image1} alt="" />
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <img className="w-100 img-fluid d-block" src={image2} alt="" />
                        <div className='card-bg mt-3 '>
                            <img width="100px" src={leaves} alt="" />
                            <h4>WEDDING PHOTOGRAPHY</h4>
                            <p>World the end of summer the sweltering heat makes human sweat in the night and man plants and trees wilt even</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;