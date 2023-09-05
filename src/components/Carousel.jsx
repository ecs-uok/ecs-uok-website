import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../assets/carousel/image1.jpg";
import Image2 from "../assets/carousel/image2.jpg";
import CarouselCard from "./CarouselCard";

export default function CarouselSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-8 overflow-hidden">
      <Slider {...settings}>
        <CarouselCard
          cardImage={Image1}
          cardTitle="Electronics and Computer Science AGM '23"
          cardLink="www.facebook.com"
        />
        <CarouselCard
          cardImage={Image2}
          cardTitle="ML and Industrial Automation"
          cardLink="www.facebook.com"
        />
        <CarouselCard
          cardImage={Image1}
          cardTitle="Electronics and Computer Science AGM '23"
          cardLink="www.facebook.com"
        />
        <CarouselCard
          cardImage={Image2}
          cardTitle="ML and Industrial Automation"
          cardLink="www.facebook.com"
        />
        <CarouselCard
          cardImage={Image1}
          cardTitle="Electronics and Computer Science AGM '23"
          cardLink="www.facebook.com"
        />
        <CarouselCard
          cardImage={Image2}
          cardTitle="ML and Industrial Automation"
          cardLink="www.facebook.com"
        />
      </Slider>
    </div>
  );
}
