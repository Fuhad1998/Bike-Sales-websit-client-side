import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/UseFirebase/UseAuth";

const Dashboard = () => {
  const {user, logOut, admin} = useAuth();
  return (
    <Navbar expand={false}   >
      <Container fluid style={{backgroundColor: '#e3f2fd'}} >
          <Link  className="header-link" to="/homes">Home</Link>
          

          {
            user?.email ? 
            <button 
            style={{backgroundColor: '#e3f2fd'}}
            className="header-link border-0"
             onClick={logOut}>Log-Out</button>
            :
            <Link  className="header-link" to="/login">Log-In</Link>
          }
          
          
        
        {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}

        <Navbar.Toggle aria-controls="offcanvasNavbar"  style={{backgroundColor: '#e3f2fd'}}/>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton style={{backgroundColor: '#e3f2fd'}}>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{backgroundColor: '#e3f2fd'}}>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link className="header-link" to="/reviews">
                Review
              </Link>
              <Link className="header-link" to="/pay">
                Pay
              </Link>
              <Link className="header-link" to="/myOrders">
                My-Orders
              </Link>

              {
                admin && <Link className="header-link" to="/manageAllOrders">
                Manage All Orders
              </Link>
              }
              {
                admin && <Link className="header-link" to="/addAProduct">
                Add-A-Product
              </Link>
              }
              {
                admin && <Link className="header-link" to="/manageProducts">
                Manage Products
              </Link>
              }
              {
                admin && <Link className="header-link" to="/makeAdmin">
                Make Admin
              </Link>
              }
              
              
              
              
              
              
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Dashboard;



//  expand={false}