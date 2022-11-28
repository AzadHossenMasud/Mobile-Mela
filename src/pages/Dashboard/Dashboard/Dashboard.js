import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Header from "../../Shared/Header/Header";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const queryClient = useQueryClient();
  const url = `http://localhost:5000/users?email=${user?.email}`;
  const { data: saveUser = [] } = useQuery({
    queryKey: ["saveUser"],
    queryFn: async () =>
      await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

//   console.log(saveUser);
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-72 bg-purple-700 text-white text-lg font-semibold">
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            {saveUser.userType === "seller" && (
              <>
                <li>
                  <Link to="/dashboard/addphone">Add Phone</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproducts">My Phones</Link>
                </li>
              </>
            )}
            {saveUser.userType === "admin" && (
              <>
                <li>
                  <Link to="/dashboard/allseller">All Seller</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyer">All Buyer</Link>
                </li>
                <li>
                  <Link to="/dashboard/reporteditem">Reported Item</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
