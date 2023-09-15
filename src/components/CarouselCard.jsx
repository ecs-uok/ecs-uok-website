import PropTypes from "prop-types";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function CarouselCard({
  cardImage,
  cardTitle,
  cardLink,
  cardSubTitle,
}) {
  return (
    <div className="bg-gray-200 rounded-lg drop-shadow-md p-4 m-4 ring ring-primary">
      <img
        className="aspect-square object-cover"
        src={cardImage}
        alt={`${cardTitle} card image`}
      />
      <div>
        <h1 className="text-xl font-bold pt-4">{cardTitle}</h1>
        <h2 className="text-sm font-medium">{cardSubTitle}</h2>
        <a href={cardLink} target="_blank" rel="noreferrer">
          <button className="flex w-full text-base mt-4 p-2 rounded-2xl items-center justify-center hover:bg-secondary hover:text-white duration-500 gap-4">
            Read More
            <FaArrowUpRightFromSquare size={20} color="white" />
          </button>
        </a>
      </div>
    </div>
  );
}

CarouselCard.propTypes = {
  cardImage: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardSubTitle: PropTypes.string.isRequired,
  cardLink: PropTypes.string.isRequired,
};
