import { FaNewspaper } from "react-icons/fa6";
import CarouselSlider from "./Carousel";

export default function RecentEventsSection() {
  return (
    <>
      <div className="bg-primary py-12 px-10 w-full md:px-48 transition-all duration-1000">
        <div className="flex gap-4 text-white">
          <FaNewspaper className="w-9 h-11" />
          <span className="text-white text-4xl">Latest Updates</span>
        </div>
        <div className="text-lg text-white pt-2">
          Latest news, recent events and upcoming events
        </div>
      </div>
      <CarouselSlider />
    </>
  );
}
