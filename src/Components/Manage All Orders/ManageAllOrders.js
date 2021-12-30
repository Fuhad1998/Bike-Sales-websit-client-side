import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [manageAllOrders, setManageAllOrders] = useState([])

    useEffect(() =>{
        fetch('https://boiling-falls-05013.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setManageAllOrders(data))
    }, [])

    const handelDeleteAllOrders = id =>{
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
                const remainingUser = manageAllOrders?.filter(order => order._id!==id)
                setManageAllOrders(remainingUser)
              }
            })
        }

    }

    return (
        <div className="row">
            {
                manageAllOrders.map(manageAllOrder =>
              

                
                    
                      <Col
                    key={manageAllOrder}
                    manageAllOrder={manageAllOrder}
                     xs={12} sm={6} md={4}
                      className="g-4 p-4 "
                      >
                    <Card
                     className="h-100 p-3 shadow px-5">
            
                    <Card.Body>
                        <Card.Title>Name: {manageAllOrder.name}</Card.Title>
                        <Card.Title>Product Name: {manageAllOrder.orderName}</Card.Title>
                        <Card.Text>Address: {manageAllOrder.address}</Card.Text>
                        <Card.Text>Email: {manageAllOrder.email}</Card.Text>
                        <Card.Title>
                        Phone Number: {manageAllOrder.number}
                        </Card.Title>
                        <button 
                        onClick={() => handelDeleteAllOrders(manageAllOrder?._id)}
                        className="btn-submit w-50 mx-5 "
                        >Delete Order</button>
                    </Card.Body>
                    </Card>
                    </Col>
                   
                )
            }
        </div>
    );
};

export default ManageAllOrders;