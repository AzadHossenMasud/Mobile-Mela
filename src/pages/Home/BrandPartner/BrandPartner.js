import React from "react";
import samsunglogo from '../../../assets/brandlogo/samsung_logo_PNG10.webp'
import applelogo from '../../../assets/brandlogo/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4-2-e1593283971693.webp'
import realmelogo from '../../../assets/brandlogo/Realme-Logo-2-e1595108753325.webp'
import vivologo from '../../../assets/brandlogo/vivo.webp'
import xiaomilogo from '../../../assets/brandlogo/xiaomi-mi-a1.webp'

const BrandPartner = () => {
  return (
    <div className=" my-5">
      <h2 className=" underline text-2xl font-semibold text-purple-900 text-center">
        Our Brand Partner
      </h2>
      <div className="divider divider-horizontal"></div>
      <div className=" flex justify-around flex-wrap my-5">
    <img src={samsunglogo} alt="" />
    <img src={applelogo} alt="" />
    <img src={realmelogo} alt="" />
    <img src={vivologo} alt="" />
    <img src={xiaomilogo} alt="" />
      </div>
    </div>
  );
};

export default BrandPartner;
