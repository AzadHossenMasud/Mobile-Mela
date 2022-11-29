import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const PhoneModal = ({ modalItem, setModalitem }) => {
//   console.log(setModalitem);
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const handleRegister = (data) => {
    console.log(data);
    setModalitem('')
    toast.success('You successfully booked the phone')
  };
  return (
    <div>
      <input type="checkbox" id="phone-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative">
          <label
            htmlFor="phone-modal"
            className="btn btn-sm bg-purple-900 btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form  onSubmit={handleSubmit(handleRegister)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-purple-900">Buyer:</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("buyername", { required: true })}
                defaultValue={user.displayName}
                readOnly
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-purple-900">Email:</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full max-w-xs"
                {...register("buyeremail", { required: true })}
                defaultValue={user.email}
                readOnly
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-purple-900">Phone Name:</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("phonename", { required: true })}
                defaultValue={modalItem.phoneName}
                readOnly
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-purple-900">Price:</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("phoneprice", { required: true })}
                defaultValue={modalItem.price}
                readOnly
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-purple-900">
                  Buyer Number:
                </span>
              </label>
              <input
                type="phone"
                className="input input-bordered w-full max-w-xs"
                {...register("buyernumber", { required: true })}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-purple-900">
                  Buyer Location:
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("buyerlocation", { required: true })}
              />
            </div>

            <div className=" flex justify-center">
              
              <input htmlFor="phone-modal"
                  className="btn btn-sm mx-auto bg-purple-800 my-3"
                  type="submit"
                />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhoneModal;
