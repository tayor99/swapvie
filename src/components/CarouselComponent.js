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
    <div className="auth__carousel">
      <Slider {...settings}>
        <div className="slide1">
          <div className="slide">
            <img
              src="https://app.jetic.io/static/media/ControlHub.c38e37fd.png"
              alt="lol"
            />
            <h3>Meet Swapive</h3>
            <p className="legend">
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="slide2">
          <div className="slide">
            <img
              src="https://app.jetic.io/static/media/ExchangeHub.5989fe89.png"
              alt="lol"
            />
            <h3>Meet Swapive</h3>
            <p className="legend">
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="slide3">
          <div className="slide">
            <img
              src="https://app.jetic.io/static/media/Visual-builder.1da39a6a.png"
              alt="lol"
            />
            <h3>Meet Swapive</h3>
            <p className="legend">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
