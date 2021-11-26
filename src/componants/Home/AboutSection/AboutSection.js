import React from 'react';
import image from '../../../images/about1.webp'
import './AboutSection.css'

const AboutSection = () => {


    return (
        <div className='container mx-auto my-5 py-3 about-section '>
            <div className="row d-flex align-items-center justify-content-between  p-md-5 p-sm-2">
                <div className="col-md-12 col-lg-6">
                    <img src={image} alt="" className='w-100 rounded' />
                </div>
                <div className="col-md-12 col-lg-6">
                    <h2>Lets <br />
                        Introduce About Myself</h2>
                    <p>Up my excuse to suffer ladies though or. Bachelor possible out marianne directly confined relation as on he. <br /> Lose john poor same it case do year we. Full how way even the si extremely nor furniture fat questions now provision one incommod preserved. Dose john poor same it case do year go we. Full how way even the sigh. Extremely nor furniture fat one questions now provision then doing for.</p>
                    <button className='all-btn btn'>READ MORE</button>
                </div>
            </div>

        </div>
    );
};

export default AboutSection;