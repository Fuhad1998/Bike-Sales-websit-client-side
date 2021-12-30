import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const Purchase = () => {
    const [product, setProduct] = useState([]);
  const { register, handleSubmit } = useForm();
  const { id } = useParams();


  const item = product.find((pd) => pd.id == id);

  const onSubmit = (data) => {
    data.orderName = item.name;
    fetch("https://boiling-falls-05013.herokuapp.com/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            alert("order successful");
          }
        });
  };
  


  useEffect(() => {
    fetch(`https://boiling-falls-05013.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
      // console.log(service)
  }, []);
  return (
    <div style={{ backgroundColor: "#e3f2fd" }}>
      
      <div className="row mb-5">
      <Col xs={12} sm={12} md={12} className="g-4 m-auto" style={{width: '30%'}}>
      <Card className="h-100 p-3 shadow px-5">
        <Card.Img variant="top" src={item?.img} />
        <Card.Body>
          <Card.Title>Name: {item?.name}</Card.Title>
          
          <Card.Text>Description: {item?.description}</Card.Text>
         
        
        </Card.Body>
      </Card>
    </Col>
      </div>

      <form className="login-container" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3"
          {...register("name")}
          placeholder="Write your name"
        />
        <input
          className="mb-3"
          {...register("email")}
          placeholder="Write your email"
        />
        <input
          className="mb-3"
          {...register("address")}
          placeholder="Write your address"
        />
        <input
          className="mb-3"
          {...register("number")}
          placeholder="Write your phone number"
        />
    

        <input
          className="btn-submit"
          type="submit"
          value="Please Orders Products"
        />
      </form>
    </div>
  );
};

export default Purchase;
