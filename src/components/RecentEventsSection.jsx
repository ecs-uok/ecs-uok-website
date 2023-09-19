import { FaNewspaper } from "react-icons/fa6";
import CarouselSlider from "./CarouselSlider";

export default function RecentEventsSection() {
  return (
    <>
      <div className="bg-primary py-12 mt-8 px-10 w-full md:px-48 transition-all duration-1000">
        <div className="flex items-center gap-4 text-white">
          <FaNewspaper className="w-8 h-10" />
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
