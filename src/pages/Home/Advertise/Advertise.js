import axios from "axios";
import React, { useEffect, useState } from "react";

const Advertise = () => {
  const [advertiseItem, setAdvertiseItem] = useState([]);

  const {phoneName, image, _id, description} = advertiseItem[0]


  useEffect(() => {
    axios.get(`http://localhost:5000/advertise`).then((res) => {
      const persons = res.data;
      setAdvertiseItem([persons]);
    });
  }, []);
  console.log(advertiseItem[0]);
  return <div>{advertiseItem?.length && <div className=" my-5">
  <h3 className=" text-2xl font-semibold text-purple-900 underline text-center">Only For You</h3>
  <div className="divider"></div>
  <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} alt="" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{phoneName}</h1>
      <p className="py-6">{description}</p>
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>

  </div >}</div>;
};

export default Advertise;
