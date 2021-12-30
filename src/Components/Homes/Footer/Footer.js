import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#e3f2fd" }} className="">
      <div className="footer-container p-5 row ">
        <div className="footer-section mx-5 col-sm-12 col-md-3">
          <h1>About Us</h1>
          <h4>Our ami is to provide best service</h4>
          <h4>We have lots of worker to help costomer</h4>
          
          <h6>
            {" "}
            <i className="fas fa-envelope "></i> fuwadrare444@gmail.com
          </h6>
          <h6>
            {" "}
            <i className="fas fa-map-marker-alt"> 184 Main uttra Street</i>
          </h6>
          <h6>
            {" "}
            <i className="fas fa-phone"></i> 01715497198
          </h6>
        </div>
        <div className="mx-5 col-sm-12 col-md-3">
          <h1>Customer Service</h1>
          <h4>Shipping Policy</h4>
          <h4>Delivery First</h4>
          <h4>Compensation First</h4>
        </div>
        <div className="mx-5 col-sm-12 col-md-3">
          <h1>Contact Us</h1>
         
          <h2><i className="fab fa-facebook text-primary"> </i> Facebook</h2>
          <h2><i className="fab fa-twitter text-info"> </i> Twitter</h2>
          <h2><i className="fab fa-youtube text-danger"> </i> Youtube</h2>
        </div>
      </div>
      <div>
        <p className="text-center  p-2">
          <i className="  fas fa-copyright mb-2 "></i> Copy right 2021 By Fuwad
          Hossian
        </p>
      </div>
    </div>
  );
};

export default Footer;
