import React from 'react';
import Slider from 'react-slick';
import '../styles/carouselComponent.css';

const CarouselComponent = () => {
  let settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="slide slide1">
        <p className="legend">Legend 1</p>
      </div>
      <div className="slide slide2">
        <p className="legend">Legend 2</p>
      </div>
      <div className="slide slide3">
        <p className="legend">Legend 3</p>
      </div>
    </Slider>
  );
};

export default CarouselComponent;
