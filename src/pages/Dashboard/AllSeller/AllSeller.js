import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSeller = () => {
  const url = "http://localhost:5000/allseller";
  const { data: allSeller = [] } = useQuery({
    queryKey: ["allSeller"],
    queryFn: async () =>
      await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  const handleVerified = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/allseller/${id}`, {
        method: 'PUT',
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => res.json())
      .then(updateresult => {
        // console.log(updateresult)
        if(updateresult.modifiedCount){
            toast.success('Seller verified successfully')
        }
      })
  };
  // console.log(allSeller);
  return (
    <div>
      {allSeller.length ? (
        <div className=" my-5 w-full mx-auto">
          <h2 className=" text-2xl font-semibold text-purple-900">
            Total Seller : {allSeller.length}
          </h2>
          <div className="overflow-x-auto">
            <table className="table w-full text-purple-900">
              <thead>
                <tr>
                  <th></th>
                  <th>Seller Name</th>
                  <th>Email</th>
                  <th>Verified</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {allSeller.map((seller, i) => (
                  <tr key={i} className="hover">
                    <th>{i + 1}</th>
                    <td>{seller.name}</td>
                    <td>{seller.email}</td>
                    <td>
                        {
                            seller.isVerified ? <>Verified</> : <button
                            onClick={() => handleVerified(seller._id)}
                            className=" btn btn-sm bg-purple-900 text-white"
                          >
                            verify me
                          </button>
                        }
                      
                    </td>
                    <td>X</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className=" flex justify-center items-center">
          No Seller found!
        </div>
      )}
    </div>
  );
};

export default AllSeller;
