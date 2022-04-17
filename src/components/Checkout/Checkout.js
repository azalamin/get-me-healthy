import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "./Checkout.css";

/* Require Auth Page user will not be able to enter this page until login */
const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const errorMessage = <p className="text-danger">Input cannot be empty</p>;
  const successMessage = <p className="text-success">Thank your for booking</p>;

  const onSubmit = (data) => {
    if (data.firstName && data.lastName && data.number && data.address) {
      // Change Toast Message
      toast(successMessage);
      return;
    } else {
      toast(errorMessage);
    }
  };

  return (
    <div className="container py-5 checkout-container mt-5">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
        <div className="checkout-input-group">
          <label>First Name</label>
          <input
            {...register("firstName")}
            name="firstName"
            placeholder="First Name"
          />
          {errors?.firstName && <p>{errors?.firstName?.message}</p>}
        </div>
        <div style={{ marginBottom: 10 }} className="checkout-input-group">
          <label>Last Name</label>
          <input
            {...register("lastName")}
            name="lastName"
            placeholder="Last Name"
          />
          {errors?.lastName && <p>{errors?.lastName?.message}</p>}
        </div>
        <div className="checkout-input-group">
          <label>Number</label>
          <input
            type="number"
            name="number"
            placeholder="Number"
            {...register("number", { valueAsNumber: true })}
          />
          {errors?.number && <p>{errors?.number?.message}</p>}
        </div>
        <div className="checkout-input-group">
          <label>Address</label>
          <input
            {...register("address")}
            name="address"
            placeholder="Address"
          />
          {errors?.address && <p>{errors?.address?.message}</p>}
        </div>
        <input className="submit-btn" type="submit" />
      </form>
    </div>
  );
};

export default Checkout;
