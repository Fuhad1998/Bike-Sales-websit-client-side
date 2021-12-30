import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';


const MyOrders = () => {
    const [myorders, setMyorders] = useState([]);

    useEffect(()=>{
        fetch("https://boiling-falls-05013.herokuapp.com/orders")
        .then(res => res.json())
        .then(data => setMyorders(data))
    }, [])

    
    const handelDeleteOrders = id =>{
        const proceed = window.confirm('Are You Sure You Want TO Delete')
        if(proceed){
            const url = `https://boiling-falls-05013.herokuapp.com/orders/${id}`
            fetch(url, {
              method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
              if(data.deletedCount > 0){
                alert('deleted successful')
                const remainingUser = myorders?.filter(order => order._id!==id)
                setMyorders(remainingUser)
              }
            })
        }

      
        
      }


    return (
        <div className="row" >
            
           
           {
               myorders.map(MyOrder => <Col xs={12} sm={6} md={4} className="g-4 p-4 " MyOrder ={MyOrder}>
               <Card className="h-100 p-3 shadow px-5">
       
               <Card.Body>
                   <Card.Title>Name: {MyOrder.name}</Card.Title>
                   <Card.Title>Product Name: {MyOrder.orderName}</Card.Title>
                   <Card.Text>Address: {MyOrder.address}</Card.Text>
                   <Card.Text>Email: {MyOrder.email}</Card.Text>
                   <Card.Title>
                   Phone Number: {MyOrder.number}
                   </Card.Title>
                   <button 
                   onClick={() => handelDeleteOrders(MyOrder?._id)}
                   className="btn-submit w-50 mx-5 "
                   >Delete Order</button>
               </Card.Body>
               </Card>
               </Col>)
               
               
               
                 
                   
                   

             
           }
            
        </div>
    );
};

export default MyOrders;




