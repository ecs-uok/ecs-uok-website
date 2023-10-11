import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

export default function NewsArticle({ newsImage, newsTitle, newsContent }) {
  return (
    <div className="p-4 mx-4 my-8 bg-white drop-shadow-lg rounded-xl">
      <img
        src={newsImage}
        alt={newsTitle}
        className="w-full h-auto md:w-[500px] md:h-auto"
      />
      <h1 className="mt-4 text-lg md:text-2xl font-bold">{newsTitle}</h1>
      <ReactMarkdown className="mt-8 text-base md:text-lg whitespace-pre-wrap">
        {newsContent}
      </ReactMarkdown>
    </div>
  );
}

NewsArticle.propTypes = {
  newsImage: PropTypes.string.isRequired,
  newsTitle: PropTypes.string.isRequired,
  newsContent: PropTypes.string.isRequired,
};
