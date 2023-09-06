import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard";
import AGM from "../assets/carousel/agm23.jpg";
import MLTSW1 from "../assets/carousel/ml_ts_w1.jpg";
import SLUGRuchira from "../assets/achievements/slug_ruchira_wrestling.jpg";

const carouselCards = [
  {
    id: 1,
    image: AGM,
    title: "ECS Club AGM '23",
    subtitle: "ECSC | Events",
    link: "https://m.facebook.com/story.php?story_fbid=pfbid0wePBandx2eNN19t76TcRJfEHWv7HcF9GvEpsgJ4GeBiWPmBMf2dthz7y6tSV9KHNl&id=61550473266598&mibextid=ZbWKwL",
  },
  {
    id: 2,
    image: MLTSW1,
    title: "ML and Industrial Automation",
    subtitle: "ECSC | TechSymphony",
    link: "https://m.facebook.com/story.php?story_fbid=pfbid02a3dfxmB3GYdnxjrk9e9D9NQv8QQYrx1P3X7viHEqVJeAp3AK9CT6gEpfFgtaAFhrl&id=61550473266598&mibextid=ZbWKwL",
  },
  {
    id: 3,
    image: SLUGRuchira,
    title: "Congratulations to Ruchira Sandeepa",
    subtitle: "ECSC | Achievements",
    link: "https://fb.watch/mUqeU6vwt6/",
  },
  {
    id: 4,
    image: MLTSW1,
    title: "ML and Industrial Automation",
    subtitle: "ECSC | TechSymphony",
    link: "https://m.facebook.com/story.php?story_fbid=pfbid02a3dfxmB3GYdnxjrk9e9D9NQv8QQYrx1P3X7viHEqVJeAp3AK9CT6gEpfFgtaAFhrl&id=61550473266598&mibextid=ZbWKwL",
  },
  {
    id: 5,
    image: AGM,
    title: "ECS Club AGM '23",
    subtitle: "ECSC | Events",
    link: "https://m.facebook.com/story.php?story_fbid=pfbid0wePBandx2eNN19t76TcRJfEHWv7HcF9GvEpsgJ4GeBiWPmBMf2dthz7y6tSV9KHNl&id=61550473266598&mibextid=ZbWKwL",
  },
  {
    id: 6,
    image: SLUGRuchira,
    title: "Congratulations to Ruchira Sandeepa",
    subtitle: "ECSC | Achievements",
    link: "https://fb.watch/mUqeU6vwt6/",
  },
];

export default function CarouselSlider() {
  const settings = {
    dots: true,
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
    <div className="my-8 mx-24 ">
      <Slider {...settings}>
        {carouselCards.map((carouselCard) => {
          return (
            <CarouselCard
              key={carouselCard.id}
              cardImage={carouselCard.image}
              cardTitle={carouselCard.title}
              cardSubTitle={carouselCard.subtitle}
              cardLink={carouselCard.link}
            />
          );
        })}
      </Slider>
    </div>
  );
}
