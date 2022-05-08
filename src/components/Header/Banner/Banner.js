
import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './../../../img/banner1.jpeg'
import img2 from './../../../img/banner2.jpg'
import img3 from './../../../img/banner3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="First slide"
    />
   
  </Carousel.Item>
  
</Carousel>
        </div>
    );
};

export default Banner;