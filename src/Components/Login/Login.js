import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/UseFirebase/UseAuth";
import './Login.css';

const Login = () => {
  const {loginUser} = useAuth();
const location = useLocation();
const history = useHistory();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => { 
    alert('login success')
    loginUser(data.email, data.password, location, history)
  };
  return (
    <div className="login-container">
        <h1>Please Log-In</h1>
      <form className="login-container" onSubmit={handleSubmit(onSubmit)}>
          <input className="" {...register("email")} placeholder="Write your email"  type="email" />
          <br />
          <input className="" {...register("password")} placeholder="Write your password" type="password" />
          <br />
          <input
            className="btn-submit"
            type="submit"
            value="Please Login"
          />
          <br />
          <Link className="" to="/register"><button className="border-0 bg-light" style={{fontWeight: 600}}>NEW USER? PLEASE REGISTER</button></Link>
        </form>
    </div>
  );
};

export default Login;
