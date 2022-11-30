import axios from "axios";
import React, { useEffect, useState } from "react";

const Advertise = ({ adItem }) => {
  console.log(adItem);
  return (
    <div>
      <div className=" my-5">
        {" "}
        <h3 className=" text-2xl font-semibold text-purple-900 underline text-center">
          Only For You
        </h3>
        <div className="divider"></div>
        <div className="hero min-h-screen bg-base-200">
          {" "}
          <div className="hero-content flex-col lg:flex-row">
            {" "}
            <img
              src={adItem.image}
              alt=""
              className="max-w-sm rounded-lg shadow-2xl"
            />{" "}
            <div>
              <h1 className="text-5xl font-bold">{adItem.phoneName}</h1>
              <p className="py-6">{adItem.description}</p>
              <button className="btn btn-primary">Book Now</button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Advertise;

// {advertiseItem?.length && }
