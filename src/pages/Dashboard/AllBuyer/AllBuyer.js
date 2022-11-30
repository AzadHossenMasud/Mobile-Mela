import { useQuery } from "@tanstack/react-query";
import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const AllBuyer = () => {
  const {delUser} = useContext(AuthContext)
  const url = "https://phone-mela-server.vercel.app/allbuyer";
  const { data: allBuyer = [] } = useQuery({
    queryKey: ["allBuyer"],
    queryFn: async () =>
      await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });


  const handleDelete = (id, uid) => {
    console.log(id, uid);
    getAuth()
    .deleteUser(uid)
    .then(() => {
      console.log('Successfully deleted user');

      fetch(`https://phone-mela-server.vercel.app/buyer/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((deleteresult) => {
          console.log(deleteresult);
          // if(updateresult.modifiedCount){
          //     toast.success('Seller verified successfully')
          // }
        });

    })
    .catch((error) => {
      console.log('Error deleting user:', error);
    });
    
  };
  // console.log(allBuyer);
  return (
    <div>
      {allBuyer.length ? (
        <div className=" my-5 w-full mx-auto">
          <h2 className=" text-2xl font-semibold text-purple-900">
            Total Buyer : {allBuyer.length}
          </h2>
          <div className="overflow-x-auto">
            <table className="table w-full text-purple-900">
              <thead>
                <tr>
                  <th></th>
                  <th>Buyer Name</th>
                  <th>Email</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {allBuyer.map((buyer, i) => (
                  <tr key={i} className="hover">
                    <th>{i + 1}</th>
                    <td>{buyer.name}</td>
                    <td>{buyer.email}</td>
                    
                    <td onClick={() => handleDelete(buyer._id, buyer.uId)}>
                      {" "}
                      <button className=" font-semibold btn btn-sm bg-purple-800">
                        X
                      </button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className=" flex justify-center items-center">
          No Buyer found!
        </div>
      )}
    </div>
  );
};

export default AllBuyer;
