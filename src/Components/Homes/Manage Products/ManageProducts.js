import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([])

    useEffect(() =>{
        fetch('https://boiling-falls-05013.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setManageProducts(data))

    }, [])

    const handelDeleteManageProducts = id =>{
      console.log(id)
        const proceed = window.confirm('Are You Sure You Want TO Delete')
        if(proceed){
            const url = `https://boiling-falls-05013.herokuapp.com/products/${id}`
            fetch(url, {
              method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
              if(data.deletedCount > 0){
                alert('deleted successful')
                const remainingUser = manageProducts?.filter(order => order?._id!==id)
                setManageProducts(remainingUser)
              }
            })
        }

      
        
      }
    return (
       
           <div className="row">
           {
                manageProducts.map(manageProduct =>    <Col
                    manageProduct={manageProduct}
                    key={manageProduct._id}
                    
                     xs={12} sm={6} md={4}
                      className="g-4 p-4 "
                      >
                    <Card
                     className="h-100 p-3 shadow px-5">
            
                    <Card.Body>
                        <Card.Title>Name: {manageProduct.name}</Card.Title>
                        <Card.Title>Product Name: {manageProduct.orderName}</Card.Title>
                        <Card.Text>Address: {manageProduct.address}</Card.Text>
                        <Card.Text>Email: {manageProduct.email}</Card.Text>
                        <Card.Title>
                        Phone Number: {manageProduct.number}
                        </Card.Title>
                        <button 
                        onClick={() => handelDeleteManageProducts(manageProduct?._id)}
                        className="btn-submit w-50 mx-5 "
                        >Delete Product</button>
                    </Card.Body>
                    </Card>
                    </Col>)
                
            }
           </div>
       
    );
};

export default ManageProducts;


