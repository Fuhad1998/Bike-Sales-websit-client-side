import React from "react";
import { Card, Col } from "react-bootstrap";

const Review = ({ review }) => {
  return (
    <Col xs={12} sm={6} md={4} className="g-4 p-4 ">
      <Card className="h-100 p-3 shadow px-5">
        <Card.Body>
          <Card.Title>Name: {review.name}</Card.Title>
          <Card.Text>Email: {review.email}</Card.Text>
          <Card.Title>Costomers Review: {review.text}</Card.Title>
          <i className=" p-1 fas fa-star"></i>
          <i className=" p-1 fas fa-star"></i>
          <i className=" p-1 fas fa-star"></i>
          <i className=" p-1 fas fa-star"></i>
          <i className=" p-1 fas fa-star"></i>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Review;
