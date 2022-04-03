import React from "react";
import { useForm } from "react-hook-form";

const AddAProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://boiling-falls-05013.herokuapp.com/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            alert("successful Add A Product");
          }
        });

  };
  return (
    <div>
      <h1 className="text-center p-3">Add-A-Product</h1>
      <form className="login-container" onSubmit={handleSubmit(onSubmit)}>
        <input
          className=""
          {...register("name")}
          placeholder="Write product name"
          type="name"
        />
        <br />
        <input
          className=""
          {...register("text")}
          placeholder="Write description"
          type="text"
        />
        <br />
        <input
          className=""
          {...register("img")}
          placeholder="Write imgUrl"
          type="text"
        />
        <br />
        <input
          className=""
          {...register("number")}
          placeholder="Write product price"
          type="number"
        />
        <br />
        <input className="btn-submit mb-4" type="submit" value="Please Add product" />
      </form>
    </div>
  );
};

export default AddAProduct;
