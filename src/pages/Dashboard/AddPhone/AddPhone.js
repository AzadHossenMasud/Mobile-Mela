import { format } from "date-fns";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const AddPhone = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  
  // console.log(format(date, 'PP'))
  
  const imgHostKey = process.env.REACT_APP_ImageBbSecret;

  const handleAddPhone = (data) => {
    // console.log(data)
    const date= new Date()

    const image = data.image[0];
    const formData = new FormData();

    formData.append("image", image);

    let catagory = "";
    if (data.catagoryid === "01") {
      catagory = "Flagship";
    } else if (data.catagoryid === "02") {
      catagory = "Mid Budget ";
    } else if (data.catagoryid === "03") {
      catagory = "Low Budget";
    } else {
      catagory = "";
    }
    // console.log(data.catagoryid);
    // console.log(catagory);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    // console.log(url);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((imgresult) => {
        if (imgresult.success) {
          const phone = {
            sellerName : user.displayName,
            phoneName: data.phonename,
            catagoryId: data.catagoryid,
            catagory,
            condition: data.condition,
            description: data.description,
            image: imgresult.data.url,
            price: data.price,
            sellerNumber: data.phone,
            year: data.year,
            location: data.location,
            status: "available",
            sellerEmail: user.email,
            orginalPrice:data.orginalprice,
            postDate: format(date, 'PP'),
            useYear: data.useyear
          };
          // console.log(phone)

          fetch("http://localhost:5000/addphone", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(phone),
          })
            .then((response) => response.json())
            .then((addresult) => {
              if (addresult.acknowledged) {
                toast.success("Your Item Success fully added.");
                navigate('/dashboard/myphones')
              }
              //   console.log("Success:", data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      });
  };
  return (
    <div className=" w-96 mx-auto my-10 font-semibold text-purple-900 shadow-xl flex justify-center items-center rounded-lg">
      <div className=" ">
        <h1 className=" text-2xl text-center">Add Phone Here!</h1>
        <form onSubmit={handleSubmit(handleAddPhone)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-purple-900">Phone Name:</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("phonename", { required: true })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-purple-900">Condition:</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              {...register("condition", { required: true })}
            >
              <option selected value="excelent">
                Excelent
              </option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-purple-900">Mobile Number:</span>
            </label>
            <input
              type="phone"
              className="input input-bordered w-full max-w-xs"
              {...register("phone", { required: true })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-purple-900">Location:</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("location", { required: true })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-purple-900">Catagory:</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              {...register("catagoryid", { required: true })}
            >
              <option selected value="01">
                Flagship Phone
              </option>
              <option value="02">Mid Budget Phone</option>
              <option value="03">Low Budgut Phone</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-purple-900">Description:</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("description", { required: true })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-purple-900">Original Price:</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              {...register("orginalprice", { required: true })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-purple-900">Sell Price:</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              {...register("price", { required: true })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-purple-900">
                Purchase Year:
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("year", { required: true })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-purple-900">
                Year of Use:
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("useyear", { required: true })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-purple-900">Phone Image:</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs"
              {...register("image", { required: true })}
            />
          </div>

          <div className=" flex justify-center">
            <input
              className="btn btn-sm mx-auto bg-purple-800 my-3"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPhone;
