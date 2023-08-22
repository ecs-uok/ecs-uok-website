import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "./CarouselItem";
import EventImageOne from "../assets/event_1_carousel.jpeg";

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
      <div className="bg-primary py-12 mt-8 px-10 w-full md:px-48 transition-all duration-1000" id="eventsSection">
        <div className="flex gap-4 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="w-10 h-10 fill-white"
          >
            <path d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
          </svg>

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
