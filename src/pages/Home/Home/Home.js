import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import BrandPartner from '../BrandPartner/BrandPartner';

const Home = () => {

    const [advertiseItem, setAdvertiseItem] = useState([]);

  useEffect(() => {
    axios.get(`https://phone-mela-server.vercel.app/advertise`).then((res) => {
      const item = res.data;
      setAdvertiseItem([item]);
    });
  }, []);


    return (
        <div>
            <Banner></Banner>
            {
advertiseItem.length && advertiseItem.map(adItem =><Advertise key={adItem._id} adItem={adItem} ></Advertise> )
            }
            
            <BrandPartner></BrandPartner>
        </div>
    );
};

export default Home;