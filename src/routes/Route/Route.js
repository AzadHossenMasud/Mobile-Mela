import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Catagories from "../../pages/Catagories/Catagories";
import AddPhone from "../../pages/Dashboard/AddPhone/AddPhone";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import MyPhones from "../../pages/Dashboard/MyPhones/MyPhones";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/catagory/:id',
            element: <PrivateRoute><Catagories></Catagories></PrivateRoute>,
            loader: async ({ params }) => {
              return fetch(`http://localhost:5000/catagories/${params.id}`);
            },
        },
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: '/dashboard',
          element: <MyOrders></MyOrders>
        },
        {
          path: '/dashboard/addphone',
          element: <AddPhone></AddPhone>
        },
        {
          path: '/dashboard/myphones',
          element: <MyPhones></MyPhones>
        },
      ]
  },
  ]);