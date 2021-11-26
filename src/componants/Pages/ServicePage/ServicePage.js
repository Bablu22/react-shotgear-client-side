import React from 'react';
import Reviews from '../../Home/Reviews/Reviews';
import Services from '../../Home/Services/Services';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';


const ServicePage = () => {
    return (
        <>
            <Navigation />
            <Services />
            <Reviews />
            <Footer />
        </>
    );
};

export default ServicePage;