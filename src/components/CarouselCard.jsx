import PropTypes from "prop-types";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function CarouselCard({
  blogImage,
  blogTitle,
  blogUrl,
  blogDate,
}) {
  return (
    <div className="bg-gray-200 rounded-xl drop-shadow-md p-4 m-4 ring ring-primary">
      <img
        className="aspect-square object-cover"
        src={blogImage}
        alt={`${blogTitle} card image`}
      />
      <div>
        <h1 className="text-base md:text-xl font-bold pt-4">{blogTitle}</h1>
        <h2 className="text-sm md:text-base font-medium pt-1">{blogDate}</h2>
        <a href={blogUrl} target="_blank" rel="noreferrer">
          <button className="flex w-full text-base mt-2 p-2 rounded-2xl items-center justify-center hover:bg-secondary hover:text-white duration-500 gap-4">
            Read More
            <FaArrowUpRightFromSquare size={20} color="white" />
          </button>
        </a>
      </div>
    </div>
  );
}

CarouselCard.propTypes = {
  blogImage: PropTypes.string.isRequired,
  blogTitle: PropTypes.string.isRequired,
  blogDate: PropTypes.string.isRequired,
  blogUrl: PropTypes.string.isRequired,
};
