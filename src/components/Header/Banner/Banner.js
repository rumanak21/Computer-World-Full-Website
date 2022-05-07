
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.startech.com.bd/image/cache/catalog/home/banner/free-home-delivery-982x500.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.startech.com.bd/image/cache/catalog/home/banner/free-home-delivery-982x500.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.startech.com.bd/image/cache/catalog/home/banner/free-home-delivery-982x500.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  
</Carousel>
        </div>
    );
};

export default Banner;