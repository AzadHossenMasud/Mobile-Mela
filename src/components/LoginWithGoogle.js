import React, { useContext } from "react";
import googleLogo from "../assets/images/google-logo.jpg";

import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const LoginWithGoogle = () => {
  const { googleLogin } = useContext(AuthContext);
  // console.log(googleLogin)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const provider = new GoogleAuthProvider();

  const handleGoogle = () => {
    googleLogin(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        toast.success(`${user.displayName}, You are successfully registered.`);

        saveUser(user.displayName, user.email);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const saveUser = (name, email) => {
    const userInfo = {
      name,
      email,
      userType: "buyer",
    };

    fetch("https://phone-mela-server.vercel.app/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result)
        getUserToken(email);
        // console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // console.log(userInfo);
  };

  const getUserToken = (email) => {
    fetch(`https://phone-mela-server.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.accessToken) {
          localStorage.setItem("accessToken", result.accessToken);
          navigate(from, { replace: true });

        }
      });
  };

  return (
    <div className=" flex flex-col justify-center items-center">
      Continuous With
      <button onClick={handleGoogle}>
        <img className=" h-12 w-12" src={googleLogo} alt="" />
      </button>
    </div>
  );
};

export default LoginWithGoogle;
