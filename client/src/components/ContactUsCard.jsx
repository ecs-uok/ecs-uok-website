import PropTypes from "prop-types";

export default function ContactUsCard({ image, text, linkType, name }) {
  return (
    <div className="flex rounded-xl mt-4 bg-primary w-[500px] h-[80px] hover:bg-secondary duration-1000">
      <div className="flex items-center mx-10  gap-10">
        <div className="h-14 w-h-14 rounded-full overflow-hidden bg-white">
          <img
            className="h-full w-full object-cover"
            src={image}
            alt={`${image} image`}
          />
        </div>
        <div className="text-white text-xl font-semibold">
          <p>{name}</p>
          <a href={`${linkType}${text}`}>{text}</a>
        </div>
      </div>
    </div>
  );
}

ContactUsCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
