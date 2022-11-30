import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import BrandPartner from '../BrandPartner/BrandPartner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <BrandPartner></BrandPartner>
        </div>
    );
};

export default Home;