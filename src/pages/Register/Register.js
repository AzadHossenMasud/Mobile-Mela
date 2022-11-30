import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import LoginWithGoogle from "../../components/LoginWithGoogle";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  //   console.log(createUser);
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const handleRegister = (data) => {
    createUser(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user)

        const userInfo = {
            displayName: data.name
        }

        updateUser(userInfo)
        .then(() => {
            toast.success(`${data.name}, You are successfully registered.`);

            saveUser(data.name, data.email, data.userType);

            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ..
      });
  };

  const saveUser = (name, email, userType) => {
    const userInfo = {
      name,
      email,
      userType,
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

        getUserToken(email)
        // console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // console.log(userInfo);
  };

  const getUserToken = email =>{
    fetch(`https://phone-mela-server.vercel.app/jwt?email=${email}`)
    .then(res => res.json())
    .then(result => {
        if(result.accessToken){
            localStorage.setItem('accessToken', result.accessToken)
            navigate('/')
        }
    })
  }
  return (
    <div className=" w-96 mx-auto my-10 font-semibold text-purple-900 shadow-xl flex justify-center items-center rounded-lg">
      <div className=" ">
        <h1 className=" text-2xl text-center">Sign Up Here!</h1>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-purple-900">Name:</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("name", { required: true, maxLength: 20 })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-purple-900">Email:</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-purple-900">Password:</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", { required: true, minLength: 6 })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-purple-900">User Type:</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              {...register("userType", { required: true })}
            >
              <option selected value="buyer">
                Buyer
              </option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <div className=" flex justify-center">
            <input
              className="btn btn-sm mx-auto bg-purple-800 my-3"
              type="submit"
            />
          </div>
        </form>
        <div className=" mb-3">
          <p>
            Have phone mela account?{" "}
            <Link to="/login" className=" font-bold text-blue-700">
              Login here!
            </Link>
          </p>
          <div className="divider">OR</div>
          <LoginWithGoogle></LoginWithGoogle>
        </div>
      </div>
    </div>
  );
};

export default Register;
