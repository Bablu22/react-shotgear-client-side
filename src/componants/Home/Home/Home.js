import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutSection from '../AboutSection/AboutSection';
import Banner from '../Banner/Banner';
import OurWork from '../OurWork/OurWork';
import Prices from '../Prices/Prices';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <AboutSection />
            <Services />
            <OurWork />
            <Prices />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;