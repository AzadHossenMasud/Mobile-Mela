import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CatagoryItem from "./CatagoryItem/CatagoryItem";
import PhoneModal from "./PhoneModal/PhoneModal";

const Catagories = () => {
  const phones = useLoaderData();
  const [modalItem, setModalitem] = useState('');
  //   console.log(modalItem);
  return (
    <div className=" my-3">
      {phones.length ? (
        <div>
          <h2 className=" text-purple-900 text-center text-2xl font-semibold">
            {phones[0].catagory} Phones
          </h2>
          <div className="divider"></div>
          <div className=" mx-auto w-full md:w-11/12 lg:w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {phones.map((phone) => (
              <CatagoryItem
                key={phone._id}
                phone={phone}
                setModalitem={setModalitem}
              ></CatagoryItem>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className=" text-center text-xl font-semibold">
            No Phone Found. Go another catagory
          </h2>
        </div>
      )}
      {modalItem && (
        <PhoneModal
          modalItem={modalItem}
          setModalitem={setModalitem}
        ></PhoneModal>
      )}
    </div>
  );
};

export default Catagories;
