import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const MyPhones = () => {
  const { user } = useContext(AuthContext);
  const [myPhones, setMyPhones] = useState([]);


  const queryClient = useQueryClient();
  const url = `http://localhost:5000/myphones?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyPhones(data);
      });
  }, []);

  //   const { data: myPhones = [] } = useQuery({
  //     queryKey: ["saveUser"],
  //     queryFn: async () =>
  //       await fetch(url, {
  //         headers: {
  //           authorization: `bearer ${localStorage.getItem("accessToken")}`,
  //         },
  //       }).then((res) => res.json()),
  //   });
    // console.log(myPhones);
  return (
    <div>
      {myPhones.length ? (
        <div className=" my-5 w-full mx-auto">
          <h2 className=" text-2xl font-semibold text-purple-900">
            Total Phone : {myPhones.length}
          </h2>
          <div className="overflow-x-auto">
            <table className="table w-full text-purple-900">
              <thead>
                <tr>
                  <th></th>
                  <th>Phone Name</th>
                  <th>Catagory</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                    myPhones.map((phone, i)=> <tr key={i} className="hover">
                    <th>{i+1}</th>
                    <td>{phone.phoneName}</td>
                    <td>{phone.catagory}</td>
                    <td>{phone.price}</td>
                    <td>{phone.status}</td>
                    
                  </tr> )
                }
                
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className=" flex justify-center items-center">
          <button className="btn btn-square loading"></button>
        </div>
      )}
    </div>
  );
};

export default MyPhones;
