import React from 'react';
import banner1 from '../../../imeges/gsx-r750zam1_action01.jpg'
import banner2 from '../../../imeges/download (2).jpg'
import banner3 from '../../../imeges/download (3).jpg'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption className="p-3 m-4 ">
     <button><Link className="header-link" to="/moreProducts">Explore</Link></button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption className="p-3 m-4">
    <button><Link className="header-link" to="/moreProducts">Explore</Link></button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption className="p-3 m-4 ">
    <button><Link className="header-link " to="/moreProducts">Explore</Link></button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;