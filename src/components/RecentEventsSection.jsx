import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "./CarouselItem";
import EventImageOne from "../assets/event_1_carousel.jpeg";
import { FaNewspaper } from "react-icons/fa6";

export default function RecentEventsSection() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div
        className="bg-primary py-12 mt-8 px-10 w-full md:px-48 transition-all duration-1000"
        id="eventsSection"
      >
        <div className="flex gap-4 text-white">
          <FaNewspaper className="w-10 h-12" />

          <span className="text-white text-4xl">Latest Updates</span>
        </div>
        <div className="text-lg text-white pt-2">
          Latest news, recent events and upcoming events
        </div>
      </div>

      <div className="bg-gray-100 py-10 w-full">
        <div className="px-20">
          <Carousel
            autoPlay
            autoPlaySpeed={3000}
            transitionDuration={1000}
            swipeable
            draggable
            infinite
            showDots
            responsive={responsive}
            centerMode={true}
            arrows
          >
            <CarouselItem
              carouselImage={EventImageOne}
              eventName="Electronics and Computer Science AGM"
              eventLink="https://facebook.com"
            />
            <CarouselItem
              carouselImage={EventImageOne}
              eventName="Electronics and Computer Science AGM"
              eventLink="https://facebook.com"
            />
            <CarouselItem
              carouselImage={EventImageOne}
              eventName="Electronics and Computer Science AGM"
              eventLink="https://facebook.com"
            />
            <CarouselItem
              carouselImage={EventImageOne}
              eventName="Electronics and Computer Science AGM"
              eventLink="https://facebook.com"
            />
          </Carousel>
        </div>
        <div className="mt-8 flex justify-center">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <button className="bg-primary text-white px-20 py-2 m-2 text-lg font-bold rounded-xl hover:bg-secondary duration-500">
              More Events
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
