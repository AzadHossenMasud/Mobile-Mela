import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginWithGoogle from "../../components/LoginWithGoogle";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  //   console.log(createUser);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();
  const handleRegister = (data) => {
    // console.log(data)
    loginUser(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        toast.success(`${user.displayName}, your are login successfully.`);
        getUserToken(user.email);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
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
    <div className=" w-96 mx-auto my-10 font-semibold text-purple-900 shadow-xl flex justify-center items-center rounded-lg">
      <div className=" ">
        <h1 className=" text-2xl text-center">Login Here!</h1>
        <form onSubmit={handleSubmit(handleRegister)}>
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

          <div className=" flex justify-center">
            <input
              className="btn btn-sm mx-auto bg-purple-800 my-3"
              type="submit"
            />
          </div>
        </form>
        <div className=" mb-3">
          <p>
            Don't have phone mela account?{" "}
            <Link to="/register" className=" font-bold text-blue-700">
              Register here!
            </Link>
          </p>
          <div className="divider">OR</div>

          <LoginWithGoogle></LoginWithGoogle>
        </div>
      </div>
    </div>
  );
};

export default Login;
