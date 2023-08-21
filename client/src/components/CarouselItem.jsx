import PropTypes from "prop-types";

export default function CarouselItem({ carouselImage, eventName, eventLink }) {
  return (
    <div className="h-[300px] w-[400px] border border-black bg-white">
      <img
        className="w-full h-2/3 overflow-hidden object-cover"
        src={carouselImage}
      ></img>
      <div className="my-8 mx-2">
        <h2 className="text-lg font-bold">{eventName}</h2>
        <a className="text-base font-medium text-blue-700" href={eventLink}>
          See More...
        </a>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  carouselImage: PropTypes.string.isRequired,
  eventName: PropTypes.string.isRequired,
  eventLink: PropTypes.string.isRequired,
};
