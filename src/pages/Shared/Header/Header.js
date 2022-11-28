import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const firstLetter = user?.displayName.slice(0, 1);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // console.log(user);
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="dropdown dropdown-bottom">
        <label tabIndex={0}>
            Click
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-purple-700 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
      </li>

      {user?.email && (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar  bg-purple-900 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-800 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl italic">
          Mobile Mela
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <>
            <div className="avatar placeholder ">
              <div
                className="bg-neutral-focus text-neutral-content rounded-full w-12 tooltip"
                data-tip={user?.displayName}
              >
                <span>{firstLetter}</span>
              </div>
            </div>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        <label
          htmlFor="my-drawer-2"
          className="btn bg-transparent drawer-button lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
