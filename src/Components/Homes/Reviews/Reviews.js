import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://boiling-falls-05013.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Review Successful");
        }
      });
  };

  useEffect(() => {
    fetch("https://boiling-falls-05013.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-center p-4">CUSTOMER REVIEWS</h1>
      </div>
      <div className="row">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
      <form className="login-container" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3"
          {...register("name")}
          placeholder="Write your name"
        />
        <input
          className=""
          {...register("email")}
          placeholder="Write your email"
        />
        <textarea
          className="mt-3"
          {...register("text")}
          placeholder="Write your "
        />
        <br />

        <input
          className="btn-submit"
          type="submit"
          value="Please Text Your Review"
        />
      </form>
    </div>
  );
};

export default Reviews;
