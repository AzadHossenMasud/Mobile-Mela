import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyBuyers = () => {
    const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const url = `https://phone-mela-server.vercel.app/mybuyers?email=${user?.email}`;
  const { data: myBuyers = [], refetch } = useQuery({
    queryKey: ["mybuyers"],
    queryFn: async () =>
      await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

const handleConfirmOrder = (orderId, phoneId)=>{
    console.log(orderId, phoneId);

    fetch(`https://phone-mela-server.vercel.app/confirmorder?orderId=${orderId}&phoneId=${phoneId}`, {
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
          toast.success('You confirm the phone')

           refetch()
        }
        // console.log(result)
      })
}
//   console.log(myBuyers)
    return (
        <div>
      {myBuyers.length ? (
        <div className=" my-5 w-full mx-auto">
          <h2 className=" text-2xl font-semibold text-purple-900">
            Total Buyer : {myBuyers.length}
          </h2>
          <div className="overflow-x-auto">
            <table className="table w-full text-purple-900">
              <thead>
                <tr>
                  <th></th>
                  <th>Phone Name</th>
                  <th>Price</th>
                  <th>Buyer Name</th>
                  <th>Phone</th>
                  <th>Confirm</th>
                </tr>
              </thead>
              <tbody>
                {myBuyers.map((buyer, i) => (
                  <tr key={i} className="hover">
                    <th>{i + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={buyer.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{buyer.phoneName}</div>
                        </div>
                      </div>
                    </td>
                    <td>{buyer.price}</td>
                    <td>{buyer.buyerName}</td>
                    <td>{buyer.buyerNumber}</td>
                    

                    <td onClick={()=>handleConfirmOrder(buyer._id, buyer.phoneId)}> 
                      {" "}
                      <button className=" font-semibold btn btn-sm bg-purple-800">
                        Confirm
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

export default MyBuyers;