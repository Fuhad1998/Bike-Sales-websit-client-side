
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Header from './Components/Homes/Header/Header';
import Homes from './Components/Homes/Homes/Homes';
import Footer from './Components/Homes/Footer/Footer';
import MoreProducts from './Components/Homes/MoreProducts/MoreProducts';
import Login from './Components/Login/Login';
import Purchase from './Components/Purchase/Purchase';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Reviews from './Components/Homes/Reviews/Reviews';
import Pay from './Components/Pay/Pay';
import MyOrders from './Components/MyOrders/MyOrders';
import Dashboard from './Components/Homes/Dashboard/Dashboard';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import AddAProduct from './Components/Homes/Add A Product/AddAProduct';
import { Card } from 'react-bootstrap';
import ManageAllOrders from './Components/Manage All Orders/ManageAllOrders';
import ManageProducts from './Components/Homes/Manage Products/ManageProducts';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';



function App() {
  return (
    <div>
     <AuthProvider>
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
          <Homes></Homes>
         </Route>
         <Route path="/homes">
          <Homes></Homes>
         </Route>
         <Route path="/moreProducts">
           <MoreProducts></MoreProducts>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/register">
           <Register></Register>
         </Route>
         <Route path="/reviews">
           <Reviews></Reviews>
         </Route>
         <Route path="/pay">
           <Pay></Pay>
         </Route>
         <Route path="/addAProduct">
           <AddAProduct></AddAProduct>
         </Route>
         <Route path="/manageAllOrders">
           <ManageAllOrders></ManageAllOrders>
         </Route>
         <Route path="/manageProducts">
           <ManageProducts></ManageProducts>
         </Route>
         <Route path="/makeAdmin">
           <MakeAdmin></MakeAdmin>
         </Route>
          

         <Route path="/myOrders">
           <MyOrders></MyOrders>
         </Route>
         <Route path="/dashboard">
           <Dashboard></Dashboard>
         </Route>
         
         <PrivateRoute path="/purchase/:id">
           <Purchase></Purchase>
         </PrivateRoute>
       </Switch>
      <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
