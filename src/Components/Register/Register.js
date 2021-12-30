import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/UseFirebase/UseAuth";

const Register = () => {
  const {registerUser} = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data.name)
    console.log(data)
      alert('Register successful')
     
      registerUser(data.email, data.password, data.name)
  };
  return (
    <div className="login-container">
      <h1>Please Register</h1>
      <form className="login-container" onSubmit={handleSubmit(onSubmit)}>
        <input
          className=""
          {...register("name")}
          placeholder="Write your name"
        />
        <br />
        <input
          className=""
          {...register("email")}
          placeholder="Write your email"
        />
        <br />
        <input
          className=""
          type="password"
          {...register("password")}
          placeholder="Write your password"
        />
        <br />
        <input className="btn-submit" type="submit" value="Please Register" />
        <br />
        <Link className="" to="/LOGIN">
          <button className="border-0 bg-light" style={{ fontWeight: 600 }}>
            ALREADY REGISTERED? PLEASE LOG-IN
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
