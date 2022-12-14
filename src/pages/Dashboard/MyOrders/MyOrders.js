import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const url = `https://phone-mela-server.vercel.app/myorders?email=${user?.email}`;
  const { data: myOrders = [] , refetch} = useQuery({
    queryKey: ["myorders"],
    queryFn: async () =>
      await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  const handleCancelOrder = (orderId, phoneId) => {
    // console.log(orderId, phoneId);
    fetch(`https://phone-mela-server.vercel.app/cancelorder?orderId=${orderId}&phoneId=${phoneId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
     
    })
      .then((response) => response.json())
      .then( result => {
        // console.log(result)
        if(result.acknowledged){
          toast.success('You Cancel Your Order')

            refetch()
        }
        // console.log(result)
      })

    
  };

//   const handleConfirm = (orderId, phoneId)=>{
//     // console.log(orderId,phoneId);
    
//   }

//   console.log(myOrders);
  return (
    <div>
      {myOrders.length ? (
        <div className=" my-5 w-full mx-auto">
          <h2 className=" text-2xl font-semibold text-purple-900">
            Total Order : {myOrders.length}
          </h2>
          <div className="overflow-x-auto">
            <table className="table w-full text-purple-900">
              <thead>
                <tr>
                  <th></th>
                  <th>Phone Name</th>
                  <th>Price</th>
                  <th>Cancel</th>
                </tr>
              </thead>
              <tbody>
                {myOrders.map((order, i) => (
                  <tr key={i} className="hover">
                    <th>{i + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={order.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{order.phoneName}</div>
                        </div>
                      </div>
                    </td>
                    <td>{order.price}</td>
                    

                    <td onClick={() => handleCancelOrder(order._id,order.phoneId)}>
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
        <div className=" flex justify-center items-center">No Order found!</div>
      )}
    </div>
  );
};

export default MyOrders;
