import React from "react";

const CatagoryItem = ({ phone , setModalitem}) => {
  //   console.log(phone);
  const {
    condition,
    description,
    image,
    location,
    phoneName,
    orginalPrice,
    price,
    postDate,
    sellerName,
    useYear,
  } = phone;
  return (
    <div className="card bg-purple-100 shadow-xl">
      <figure>
        <img className=" w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body text-purple-900">
        <h2 className="card-title">{phoneName}</h2>
        <div className=" grid grid-cols-1 justify-between ">
          <p className=" font-semibold ">{sellerName}</p>
          <p>Location: {location}</p>
          <p>Use : {useYear} years</p>
          <p className="font-semibold">Original Price: {orginalPrice}</p>

          <p className="font-semibold">Sell Price: {price}</p>
          <p>Post Data: {postDate}</p>
        </div>
        <div className="card-actions justify-end">
          <label
          onClick={()=>setModalitem(phone)}
            htmlFor="phone-modal"
            className="badge badge-outline bg-purple-900 text-white font-semibold p-3"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default CatagoryItem;
