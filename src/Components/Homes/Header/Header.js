import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import './Header.css';

const Header = () => {
  return (
    <div className="header-container"  >
      <h1 className="text-center p-2">Welcome To Bengal Motors</h1>
      <nav className="navbar navbar-light"style={{backgroundColor: '#e3f2fd'}}>
        
          {/* <Link className="header-link" to="/homes">Home</Link> */}
          
          {/* <Link className="header-link" to="/reviews">Review</Link> */}
          {/* <Link className="header-link" to="/pay">Pay</Link>
          <Link className="header-link" to="/myOrders">My-Orders</Link> */}
          {/* <Link className="header-link" to="/login">Log-In</Link> */}
          <Dashboard></Dashboard>
      </nav>
    </div>
  );
};

export default Header;
