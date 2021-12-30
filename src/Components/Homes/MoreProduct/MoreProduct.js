import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Moreproduct = ({product}) => {
    const {name, img,price,description, id} = product;
    return (
        <Col xs={12} sm={6} md={4} className="g-4 py-3">
        <Card className="h-100 p-3 shadow px-5">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Name: {name}</Card.Title>
            <Card.Title>
              Price BD: <span className="text-success">{price}</span>
            </Card.Title>
            <Card.Text>Description: {description}</Card.Text>
            <button className="btn-submit w-50 mx-5 "><Link className="btm-link" to={`/purchase/${id}`}>Buy Now</Link></button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Moreproduct;