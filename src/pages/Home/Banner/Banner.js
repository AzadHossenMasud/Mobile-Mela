import React from "react";
import bannerImg from '../../../assets/images/banner.jpg'

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello Everyone</h1>
          <p className="mb-5">
            We are going to provide a service. You can buy your old phone. You can sell your old phone. Don't be late. Join With us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
