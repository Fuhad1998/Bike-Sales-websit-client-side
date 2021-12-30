import React from "react";
import { Card, Col } from "react-bootstrap";

                
const RecentSale = ({sale}) => {
  return (
  
      <Col xs={12} sm={6} md={6} className="g-4 ">
        <Card className="h-100 p-3 shadow px-5">
          <Card.Img variant="top" src={sale.img} />
          <Card.Body>
            <Card.Title>Name: {sale.name}</Card.Title>
           
            <Card.Text>Description: {sale.description}</Card.Text>
            
          </Card.Body>
        </Card>
      </Col>
    
  );
};

export default RecentSale;
