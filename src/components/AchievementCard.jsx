import PropTypes from "prop-types";
import { FaShareNodes, FaArrowUpRightFromSquare } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";
import { FacebookShareButton } from "react-share";
export default function AchievementCard({
  cardDate,
  cardImage,
  cardTitle,
  cardDescription,
  cardLink,
}) {
  return (
    <div className="p-4 mx-4 my-8 bg-white drop-shadow-lg rounded-xl max-w-[400px] max-h-[800px]">
      <div>
        <p className="mb-2 text-lg font-medium">{cardDate}</p>
        <img src={cardImage} alt={cardTitle} className="w-full" />
        <h1 className="font-bold text-black text-xl mt-4">{cardTitle}</h1>
        <ReactMarkdown className="text-black text-base mt-4 whitespace-pre-wrap">
          {cardDescription}
        </ReactMarkdown>
      </div>
      <div className="flex justify-between mt-4">
        <a href={cardLink} target="_blank" rel="noreferrer">
          <button className="flex gap-4 items-center justify-centerpy-1 px-8 py-2 rounded-3xl bg-primary text-white hover:bg-secondary hover:text-white duration-500">
            Read More
            <FaArrowUpRightFromSquare size={16} color="white" />
          </button>
        </a>
        <FacebookShareButton url={cardLink}>
          <div className="cursor-pointer items-center justify-center bg-primary rounded-full p-4 hover:bg-secondary duration-500">
            <FaShareNodes color="white" size={16} />
          </div>
        </FacebookShareButton>
      </div>
    </div>
  );
}

AchievementCard.propTypes = {
  cardDate: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardLink: PropTypes.string.isRequired,
};
